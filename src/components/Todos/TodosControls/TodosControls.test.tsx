import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

import { TODO_FILTER } from "types/todoFilter.enum";

import TodosControls from "./TodosControls";

const selectors = {
    allButton: () => screen.getByRole("button", { name: /all/i }),
    activeButton: () => screen.getByRole("button", { name: /active/i }),
    completedButton: () => screen.getByRole("button", { name: "Completed" }),
    clearButton: () => screen.getByRole("button", { name: /clear/i }),
};

const deleteTodoFn = jest.fn();
const changeFilterFn = jest.fn();
const mockedActiveFilter = TODO_FILTER.all;
const mockedTodosCount = 15;

let user: UserEvent;

beforeEach(() => {
    user = userEvent.setup();
    deleteTodoFn.mockClear();
    changeFilterFn.mockClear();
});

test("should render TodosControls", () => {
    render(
        <TodosControls
            activeFilter={mockedActiveFilter}
            changeFilter={changeFilterFn}
            deleteTodos={deleteTodoFn}
            todosCount={mockedTodosCount}
        />,
    );

    expect(selectors.activeButton()).toBeInTheDocument();
    expect(selectors.allButton()).toBeInTheDocument();
    expect(selectors.completedButton()).toBeInTheDocument();
    expect(selectors.clearButton()).toBeInTheDocument();
});

test("should invoke 'changeFilter' when button is clicked", async () => {
    render(
        <TodosControls
            activeFilter={mockedActiveFilter}
            changeFilter={changeFilterFn}
            deleteTodos={deleteTodoFn}
            todosCount={mockedTodosCount}
        />,
    );

    await act(async () => {
        await user.click(selectors.activeButton());
        await user.click(selectors.completedButton());
        await user.click(selectors.allButton());
    });

    const { active, all, completed } = TODO_FILTER;

    expect(changeFilterFn).toBeCalledTimes(3);
    expect(changeFilterFn).toBeCalledWith(active);
    expect(changeFilterFn).toBeCalledWith(completed);
    expect(changeFilterFn).toBeCalledWith(all);
});

test("should invoke 'deleteTodo' when button is clicked", async () => {
    render(
        <TodosControls
            activeFilter={mockedActiveFilter}
            changeFilter={changeFilterFn}
            deleteTodos={deleteTodoFn}
            todosCount={mockedTodosCount}
        />,
    );

    await act(async () => await user.click(selectors.clearButton()));

    expect(deleteTodoFn).toBeCalledTimes(1);
});
