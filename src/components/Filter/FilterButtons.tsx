import { useContext } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { AppContext } from "../App/App";

const FilterButtons: React.FC = () => {
    const {filter, setFilter} = useContext(AppContext);

    return ( 
        <ButtonGroup className="filter__buttons-group" variant="text" aria-label="text button group">
            <Button 
            className={`${filter === "all" ? "filter--active" : ""}`} 
            onClick={() => setFilter("all")} variant="contained">
                All
            </Button>
            <Button 
            className={`${filter === "active" ? "filter--active" : ""}`} 
            onClick={() => setFilter("active")} variant="contained">
                Active
            </Button>
            <Button 
            className={`${filter === "completed" ? "filter--active" : ""}`} 
            onClick={() => setFilter("completed")} variant="contained">
                Completed
            </Button>
        </ButtonGroup> 
    );
}

export default FilterButtons;