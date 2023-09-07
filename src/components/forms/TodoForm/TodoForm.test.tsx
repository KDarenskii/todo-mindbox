import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

import TodoForm from "./TodoForm";

const selectors = {
    form: () => screen.getByTitle("todo"),
    todoInput: () => screen.getByRole("textbox"),
};

let user: UserEvent;

beforeEach(() => {
    user = userEvent.setup();
});

test("should render when mounted", () => {
    render(<TodoForm />);

    expect(selectors.form()).toBeInTheDocument();
    expect(selectors.todoInput()).toBeInTheDocument();
});

test("should display default todo value", () => {
    render(<TodoForm />);

    expect(selectors.todoInput()).toBeInTheDocument();
    expect(selectors.todoInput()).toHaveValue("");
});

test("should display fields with value when user types", async () => {
    const mockedTodo = "mocked todo";

    render(<TodoForm />);

    const todo = selectors.todoInput();

    await act(async () => {
        await user.type(todo, mockedTodo);
    });

    expect(todo).toHaveValue(mockedTodo);
});
