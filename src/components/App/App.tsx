import { createContext, useState } from 'react';
import { Context, TFilter, TTodoList } from '../../types/types';
import Accordion from '../Accordion/Accordion';
import Filter from '../Filter/Filter';


export const AppContext = createContext<Context>({
    todoList: [],
    setTodoList: () => {},
    filter: "all",
    setFilter: () => {}
})
const {Provider} = AppContext;


const App: React.FC = () => {
    const [todoList, setTodoList] = useState<TTodoList>([]);
    const [filter, setFilter] = useState<TFilter>("all");

    return (
        <Provider value={{todoList, setTodoList, filter, setFilter}}>
            <h1>Todo List</h1>
            <Accordion/>
            <Filter/>
        </Provider>
    )
}

export default App;