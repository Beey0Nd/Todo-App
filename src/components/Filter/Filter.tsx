import { Button } from "@mui/material";
import { useContext } from "react";
import { TTodoList } from "../../types/types";
import { AppContext } from "../App/App";
import FilterButtons from "./FilterButtons";


const Filter: React.FC = () => {
    const { todoList, setTodoList } = useContext(AppContext);

    const handleClear = (todoList: TTodoList) => {
        setTodoList(todoList.filter(todo => !todo.completed))
    }

    const countItems = (todoList: TTodoList) => {
        return (`${todoList.length}`).at(-1) === "1" ? `${todoList.length} item left` : `${todoList.length} items left`
    }

    return (
        <div className="filter">
            <Button sx={{ width: "130px" }}
                className="filter__items-left">{countItems(todoList)}</Button>
            <FilterButtons />
            <Button
                onClick={() => handleClear(todoList)}
                variant="outlined">Clear Completed</Button>
        </div>
    );
}

export default Filter;