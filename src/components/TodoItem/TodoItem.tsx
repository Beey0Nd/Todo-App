import { useContext } from "react";
import { Checkbox, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Id, ITodo, Text } from "../../types/types";
import { AppContext } from "../App/App";



const TodoItem: React.FC<ITodo> = ({ id, completed, text }) => {
    const { todoList, setTodoList } = useContext(AppContext)

    const setCompleted = (id: Id) => {
        const newTodoList = todoList.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            };
            return todo;
        })
        setTodoList(newTodoList);
    }

    const cutText = (text: Text) => {
        return text.length > 50 ? `${text.substring(0, 50)}...` : text;
    }

    return (
        <ListItem divider>
            <ListItemButton onClick={() => setCompleted(id)}>
                <Checkbox checked={completed}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }} />
                <ListItemText className={`${completed ? "todo__item--completed" : ""}`}>
                    {cutText(text)}
                </ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

export default TodoItem;