// State related
export interface IState {
    todoList: TTodoList,
    filter: TFilter,
}
export type TFilter = "all" | "completed" | "active"
export type TTodoList = Array<ITodo>

export interface ITodo {
    text: Text,
    completed: Completed,
    id: Id
}
export type Text = string
export type Completed = boolean;
export type Id = string

// Action related
export interface AddTodoAction {
    type: "ADD_TODO",
    payload: ITodo
}

export interface RemoveCompletedAction {
    type: "REMOVE_COMPLETED"
}

export interface SetFilterAction {
    type: "SET_FILTER",
    payload: TFilter
}

export interface SetCompletedAction {
    type: "SET_COMPLETED",
    payload: Id
}

export type ActionTypes = 
AddTodoAction | 
SetCompletedAction | 
RemoveCompletedAction | 
SetFilterAction