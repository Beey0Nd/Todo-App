import { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { v4 } from "uuid";
import { ITodo } from "../../types/types";
import { AppContext } from "../App/App";



interface Props {
    setExpanded: Function
}

const initialState = {
    text: "",
    completed: false,
    id: ""
}

const TodoInput: React.FC<Props>= ({setExpanded}) => {
    const {todoList, setTodoList} = useContext(AppContext)
    const [newTodo, setNewTodo] = useState<ITodo>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({...newTodo, text: e.target.value})
    }

    const handleKey = (e: React.KeyboardEvent) => {

        if(e.key === "Enter" && newTodo.text !== "") {
            setTodoList([{...newTodo, id: v4()}, ...todoList])
            setNewTodo(initialState);
            setExpanded("panel1")
        }
    }

    return (
        <TextField 
            autoComplete="off"
            onClick={(e) => e.stopPropagation()}
            onKeyPress={handleKey}
            onChange={handleChange}
            value={newTodo.text}
            label="What needs to be done?" 
            variant="standard"
        /> 
    );
}
 
export default TodoInput;