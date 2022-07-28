import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import {addTodo, removeCompleted, setCompleted, setFilter} from "../actions/actions";

import store from "../store/store"

describe("TodoList", () => {
    describe("on first render", () => {
        const component = render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        )
        it("should render an empty list message", () => {
            const list = component.getByTestId("empty-list")
            expect(list).toHaveTextContent("Your Todo List is empty");
        })
        it("should not render any list items", () => {
            const items = component.queryAllByRole("todo-item");
            expect(items.length).toBe(0);
        })
    })
    describe("on a new todo adding", () => {
        it("should render a todo", () => {
            store.dispatch(addTodo({
                text: "First todo", 
                completed: false, 
                id:"first todo id"}));
            const component = render(
                <Provider store={store}>
                    <TodoList />
                </Provider>
            )
            const todo = component.getByRole("todo-item");
    
            expect(todo).toBeInTheDocument();   
        })
        it("should not render an empty todo list message", () => {
            const component = render(
                <Provider store={store}>
                    <TodoList />
                </Provider>
            )
            const list = component.queryByTestId("empty-list")
            expect(list).not.toBeInTheDocument();
        })
    })
    describe("on filter switch", () => {
        describe("to COMPLETED", () => {
            it("should render an empty completed list message", () => {
                store.dispatch(setFilter("completed"));
                const component = render(
                    <Provider store={store}>
                        <TodoList />
                    </Provider>
                )
                const list = component.getByTestId("empty-list");
    
                expect(list.textContent).toBe("No completed todo's")
            })
        })
        describe("to ACTIVE", () => {
            it("should render an active todo", () => {
                store.dispatch(setFilter("active"));
                const component = render(
                    <Provider store={store}>
                        <TodoList />
                    </Provider>
                )
                const todo = component.getByRole("todo-item");

                expect(todo).toBeInTheDocument();
            })
        })
    })
    describe("on first todo status change to completed", () => {
        it("should render an empty active todo message", () => {
            store.dispatch(setCompleted("first todo id"));
            const component = render(
                <Provider store={store}>
                    <TodoList />
                </Provider>
            )
            const list = component.getByTestId("empty-list");

            expect(list.textContent).toBe("No active todo's")
        })
        describe("on filter change to completed", () => {
            it("should render a completed todo", () => {
                store.dispatch(setFilter("completed"));
                const component = render(
                    <Provider store={store}>
                        <TodoList />
                    </Provider>
                )
                const todo = component.getByRole("todo-item")
                expect(todo).toBeInTheDocument();
            })
            it("a todo should have blurred text", () => {
                const component = render(
                    <Provider store={store}>
                        <TodoList />
                    </Provider>
                )
                const todoText = component.getByTestId("todo-item-text")
                
                expect(todoText).toHaveClass("todo__item--completed")   
            })
        })
    })
    describe("on a completed todo removal", () => {
        it("should render an empty completed list message", () => {
            store.dispatch(removeCompleted());
            const component = render(
                <Provider store={store}>
                    <TodoList />
                </Provider>
            )
            const list = component.getByTestId("empty-list");

            expect(list.textContent).toBe("No completed todo's")
        })
        describe("and on filter switch back to ALL", () => {
            it("should render an empty todo list message", () => {
                store.dispatch(setFilter("all"));
                const component = render(
                    <Provider store={store}>
                        <TodoList />
                    </Provider>
                )
                const list = component.getByTestId("empty-list");

                expect(list.textContent).toBe("Your Todo List is empty")
            })
        })
    })
})