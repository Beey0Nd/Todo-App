import { Fragment, memo } from "react";
import { useSelector } from "react-redux";
import { IState, TFilter, TTodoList } from "../../types/types";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: React.FC = () => {
    const { todoList, filter } = useSelector((state: IState) => state)

    const sortByFilter = (filter: TFilter): TTodoList => {
        switch (filter) {
            case "all":
                return todoList
            case "active":
                return todoList.filter(todo => !todo.completed)
            case "completed":
                return todoList.filter(todo => todo.completed)
            default:
                return todoList;
        }
    }

    const renderList = (todoList: TTodoList, filter: TFilter) => {
        if (todoList.length === 0) {
            return filter === "all" ?
                <h3 data-testid="empty-list" className="todo__empty-list">
                    Your Todo List is empty
                </h3> :
                <h3 data-testid="empty-list" className="todo__empty-list">
                    No {filter} todo's
                </h3>
        }
        return todoList.map(
            (todo) => {
                return (
                    <Fragment key={todo.id}>
                        <div role="todo-item" className="todo__item">
                            <TodoItem
                                id={todo.id}
                                text={todo.text}
                                completed={todo.completed}
                            />
                        </div>
                    </Fragment>
                )
            }
        )
    }

    return (
        <ul data-testid="todo-ul" role="todo-ul" className="todo__list">
            {renderList(sortByFilter(filter), filter)}
        </ul>
    )
}

export default memo(TodoList);