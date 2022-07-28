import { Checkbox, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { setCompleted } from "../../actions/actions";
import { ITodo, Text } from "../../types/types";


const TodoItem: React.FC<ITodo> = ({ id, completed, text }) => {
    const dispatch = useDispatch();
    
    const cutText = (text: Text) => {
        return text.length > 50 ? `${text.substring(0, 50)}...` : text;
    }

    return (
        <ListItem divider>
            <ListItemButton onClick={() => dispatch(setCompleted(id))}>
                <Checkbox checked={completed}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }} />
                <ListItemText
                data-testid="todo-item-text"
                className={`${completed ? "todo__item--completed" : ""}`}>
                    {cutText(text)}
                </ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

export default memo(TodoItem);