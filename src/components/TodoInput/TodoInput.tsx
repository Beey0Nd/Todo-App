import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { v4 } from "uuid";
import { ITodo } from "../../types/types";
import { addTodo } from "../../actions/actions";


interface Props {
    setExpanded: (expanded: string) => void
}

const initialState = {
    text: "",
    completed: false,
    id: ""
}

const TodoInput: React.FC<Props> = ({ setExpanded }) => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<ITodo>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({ ...newTodo, text: e.target.value })
    }

    const handleKey = (e: React.KeyboardEvent) => {

        if (e.key === "Enter" && newTodo.text !== "") {
            dispatch(addTodo({ ...newTodo, id: v4() }))
            setNewTodo(initialState);
            setExpanded("panel1")
        }
    }

    return (
        <TextField
            autoComplete="off"
            InputProps={{ disableUnderline: true }}
            onClick={(e) => e.stopPropagation()}
            onKeyPress={handleKey}
            onChange={handleChange}
            value={newTodo.text}
            label="What needs to be done?"
            variant="standard"
        />
    );
}

export default memo(TodoInput);