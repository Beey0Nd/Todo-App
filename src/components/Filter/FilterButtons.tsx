import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../actions/actions";
import { IState } from "../../types/types";

const FilterButtons: React.FC = () => {
    const {filter} = useSelector((state: IState) => state)
    const dispatch = useDispatch();

    return (
        <ButtonGroup className="filter__buttons-group" variant="text" aria-label="text button group">
            <Button
                className={`${filter === "all" ? "filter--active" : ""}`}
                onClick={() => dispatch(setFilter("all"))} variant="contained">
                All
            </Button>
            <Button
                className={`${filter === "active" ? "filter--active" : ""}`}
                onClick={() => dispatch(setFilter("active"))} variant="contained">
                Active
            </Button>
            <Button
                className={`${filter === "completed" ? "filter--active" : ""}`}
                onClick={() => dispatch(setFilter("completed"))} variant="contained">
                Completed
            </Button>
        </ButtonGroup>
    );
}

export default FilterButtons;