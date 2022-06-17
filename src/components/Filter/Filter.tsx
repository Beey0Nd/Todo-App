import { Button, ButtonGroup } from "@mui/material";
import { useContext } from "react";
import { TTodoList } from "../../types/types";
import { AppContext } from "../App/App";


const Filter: React.FC = () => {
    const {todoList, setTodoList, filter, setFilter} = useContext(AppContext);

    const handleClear = (todoList: TTodoList) => {
        setTodoList(todoList.filter(todo => !todo.completed))
    }   
    
    const countItems = (todoList: TTodoList) => {
       return `${todoList.length}`.at(-1) === "1" ? `${todoList.length} item left` : `${todoList.length} items left`
    }

    return (  
        <div className="filter">
            <Button className="filter__items-left">{countItems(todoList)}</Button>
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
            <Button
            onClick={() => handleClear(todoList)} 
            variant="outlined">Clear Completed</Button>
        </div>
    );
}
 
export default Filter;