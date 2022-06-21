import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeCompleted } from "../../actions/actions";
import { IState, TTodoList } from "../../types/types";
import FilterButtons from "./FilterButtons";


const Filter: React.FC = () => {
    const dispatch = useDispatch();
    const {todoList} = useSelector((state: IState) => state)

    const countItems = (todoList: TTodoList) => {
        return (`${todoList.length}`).at(-1) === "1" ? `${todoList.length} item left` : `${todoList.length} items left`
    }

    return (
        <div className="filter">
            <Button sx={{ width: "130px" }}
                className="filter__items-left">{countItems(todoList)}</Button>
            <FilterButtons />
            <Button
                onClick={() => dispatch(removeCompleted())}
                variant="outlined">Clear Completed</Button>
        </div>
    );
}

export default Filter;