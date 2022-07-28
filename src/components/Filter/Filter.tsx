import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeCompleted } from "../../actions/actions";
import { IState, TTodoList } from "../../types/types";
import FilterButtons from "./FilterButtons";


const Filter: React.FC = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state: IState) => state.todoList)

    const countItems = (todoList: TTodoList) => {
        return `${todoList.length} item${todoList.length
            .toString().at(-1) === "1" ? "" : "s" } left`
    }

    const handleClick = () => {
        if(todoList.find(item => item.completed)) {
            dispatch(removeCompleted())
        }
    }

    return (
        <div className="filter">
            <Button sx={{ width: "130px" }}
                className="filter__items-left">{countItems(todoList)}</Button>
            <FilterButtons />
            <Button
                onClick={handleClick}
                variant="outlined">Clear Completed</Button>
        </div>
    );
}

export default Filter;