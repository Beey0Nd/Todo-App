import { useState } from "react";
import { Accordion as AccordionMUI, AccordionSummary, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";



const Accordion: React.FC = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (
        event: React.SyntheticEvent,
        isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <AccordionMUI
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <TodoInput setExpanded={setExpanded} />
                </AccordionSummary>
                <Divider />
                <TodoList />
            </AccordionMUI>
        </>
    )
}

export default Accordion;