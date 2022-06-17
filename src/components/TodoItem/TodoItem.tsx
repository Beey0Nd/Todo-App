import { useContext } from "react";
import { Checkbox, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Id, ITodo } from "../../types/types";
import { AppContext } from "../App/App";



const TodoItem: React.FC<ITodo> = ({id, completed, text}) => {
    const {todoList, setTodoList} = useContext(AppContext)

    const setCompleted = (id: Id) => {
        const newTodoList = todoList.map(todo => {
            if(todo.id === id) todo.completed = !todo.completed;
            return todo;
        })
        setTodoList(newTodoList);
    }

    return (
      <ListItem>
        <ListItemButton onClick={() => setCompleted(id)}>
          <Checkbox checked={completed}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}/>
          <ListItemText className={`${completed?"todo__item--completed":""}`}>
            {text}
          </ListItemText>
        </ListItemButton>
      </ListItem>
    )
}
 
export default TodoItem;