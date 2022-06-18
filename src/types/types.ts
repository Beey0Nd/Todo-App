export interface Context {
    todoList: TTodoList,
    setTodoList: (todoList: TTodoList) => void,
    filter: TFilter,
    setFilter: (filter: TFilter) => void
}
export interface ITodo {
    text: Text,
    completed: Completed,
    id: Id
}

export type TTodoList = Array<ITodo>
export type Text = string
export type Completed = boolean;
export type Id = string
export type TFilter = "all" | "completed" | "active"