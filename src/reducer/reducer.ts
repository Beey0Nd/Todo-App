import { ActionTypes, IState } from "../types/types";

const initialState: IState = {
    todoList: [],
    filter: "all",
}

const reducer = (state = initialState, action: ActionTypes): IState => {
    const { todoList } = state;

    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todoList: [action.payload, ...todoList]
            }
        case "SET_COMPLETED":
            return {
                ...state,
                todoList: todoList.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    };
                    return todo;
                })
            }
        case "REMOVE_COMPLETED":
            return {
                ...state,
                todoList: todoList.filter(todo => !todo.completed)
            }
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload
            }
        default: return state
    }
}

export default reducer;