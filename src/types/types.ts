export interface Context {
    todoList: TTodoList,
    setTodoList: React.Dispatch<React.SetStateAction<TTodoList>>,
    filter: TFilter,
    setFilter: React.Dispatch<React.SetStateAction<TFilter>>
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