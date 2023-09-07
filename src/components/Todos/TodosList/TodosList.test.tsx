import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

import { ITodo } from "types/todo.interface";

import TodosList from "./TodosList";

let user: UserEvent;

beforeEach(() => {
    user = userEvent.setup();
});

const mockedTodos: ITodo[] = [
    {
        id: "test_id_1",
        isCompleted: false,
        title: "test_title-1",
    },
    {
        id: "test_id_2",
        isCompleted: false,
        title: "test_title-2",
    },
];

test("should display empty list", () => {
    render(<TodosList todos={[]} toggleTodo={() => {}} />);

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
});

test("should display todos list", () => {
    render(<TodosList todos={mockedTodos} toggleTodo={() => {}} />);

    const todos = screen.getAllByRole("listitem");

    expect(todos).toHaveLength(2);
    expect(todos[0]).toBeInTheDocument();
    expect(todos[1]).toBeInTheDocument();
});

test("should invoke toggleTodo after click on item", async () => {
    const toggleTodoFn = jest.fn();

    render(<TodosList todos={mockedTodos} toggleTodo={toggleTodoFn} />);

    const todo = screen.getAllByRole("listitem")[0];

    await act(async () => {
        await user.click(todo);
    });

    expect(toggleTodoFn).toBeCalledTimes(1);
});
