import { Button, ButtonGroup } from "@mui/material";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../actions/actions";
import { IState } from "../../types/types";

const FilterButtons: React.FC = () => {
    const filter = useSelector((state: IState) => state.filter)
    const dispatch = useDispatch();

    return (
        <ButtonGroup className="filter__buttons-group" variant="text" aria-label="text button group">
            <Button
                data-testid="all-btn" 
                className={`${filter === "all" ? "filter--active" : ""}`}
                onClick={() => dispatch(setFilter("all"))} variant="contained">
                All
            </Button>
            <Button
                data-testid="active-btn"
                className={`${filter === "active" ? "filter--active" : ""}`}
                onClick={() => dispatch(setFilter("active"))} variant="contained">
                Active
            </Button>
            <Button
                data-testid="completed-btn"
                className={`${filter === "completed" ? "filter--active" : ""}`}
                onClick={() => dispatch(setFilter("completed"))} variant="contained">
                Completed
            </Button>
        </ButtonGroup>
    );
}

export default memo(FilterButtons);