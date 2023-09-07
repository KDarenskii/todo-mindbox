import { act, renderHook } from "@testing-library/react";

import { ITodo } from "types/todo.interface";
import { TODO_FILTER } from "types/todoFilter.enum";

import useTodos from "./useTodos";

const mockedTodo: ITodo = {
    id: "test_id",
    isCompleted: false,
    title: "test_title",
};

test("should provide empty list when mounted", () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.todosList).toHaveLength(0);
    expect(result.current.todosList).toEqual([]);
});

test("should add todo when list is empty", () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.todosList).toHaveLength(0);
    expect(result.current.todosList).toEqual([]);

    act(() => result.current.handleAddTodo(mockedTodo.title));

    expect(result.current.todosList).toHaveLength(1);
    expect(result.current.todosList[0].title).toEqual(mockedTodo.title);
    expect(result.current.todosList[0].isCompleted).toEqual(false);
});

test("should add todo to the top of the list when it is not empty", () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.todosList).toHaveLength(0);
    expect(result.current.todosList).toEqual([]);

    act(() => result.current.handleAddTodo(mockedTodo.title));

    expect(result.current.todosList).toHaveLength(1);
    expect(result.current.todosList[0].title).toEqual(mockedTodo.title);
    expect(result.current.todosList[0].isCompleted).toEqual(false);

    act(() => result.current.handleAddTodo("new todo"));

    expect(result.current.todosList).toHaveLength(2);
    expect(result.current.todosList[0].title).toEqual("new todo");
    expect(result.current.todosList[0].isCompleted).toEqual(false);
});

test("should not add todo when todo with such title is already existing", () => {
    const { result } = renderHook(() => useTodos());

    act(() => result.current.handleAddTodo(mockedTodo.title));

    expect(result.current.todosList).toHaveLength(1);
    expect(result.current.todosList[0].title).toEqual(mockedTodo.title);

    act(() => result.current.handleAddTodo(mockedTodo.title));

    expect(result.current.todosList).toHaveLength(1);
    expect(result.current.todosList[0].title).toEqual(mockedTodo.title);
});

test("should change todo status", () => {
    const { result } = renderHook(() => useTodos());

    act(() => result.current.handleAddTodo(mockedTodo.title));

    expect(result.current.todosList[0].isCompleted).toEqual(false);

    act(() =>
        result.current.handleToggleStatus(result.current.todosList[0].id),
    );

    expect(result.current.todosList[0].isCompleted).toEqual(true);

    act(() =>
        result.current.handleToggleStatus(result.current.todosList[0].id),
    );

    expect(result.current.todosList[0].isCompleted).toEqual(false);
});

test("should delete completed todos", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
        result.current.handleAddTodo(mockedTodo.title);
        result.current.handleAddTodo("new todo");
    });

    expect(result.current.todosList).toHaveLength(2);

    act(() => {
        result.current.handleToggleStatus(result.current.todosList[0].id);
        result.current.handleToggleStatus(result.current.todosList[1].id);
    });

    expect(result.current.todosList[0].isCompleted).toEqual(true);
    expect(result.current.todosList[1].isCompleted).toEqual(true);

    act(() => result.current.handleDeleteTodos());

    expect(result.current.todosList).toHaveLength(0);
});

test("should provide 'all' filter value when mounted", () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.activeFilter).toEqual(TODO_FILTER.all);
});

test("should change filter status", () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.activeFilter).toEqual(TODO_FILTER.all);

    act(() => result.current.handleChangeFilter(TODO_FILTER.active));

    expect(result.current.activeFilter).toEqual(TODO_FILTER.active);

    act(() => result.current.handleChangeFilter(TODO_FILTER.completed));

    expect(result.current.activeFilter).toEqual(TODO_FILTER.completed);

    act(() => result.current.handleChangeFilter(TODO_FILTER.all));

    expect(result.current.activeFilter).toEqual(TODO_FILTER.all);
});

test("should filter todos list when filter is active", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
        result.current.handleAddTodo(mockedTodo.title);
        result.current.handleAddTodo("new todo");
    });

    act(() =>
        result.current.handleToggleStatus(result.current.todosList[0].id),
    );

    expect(result.current.todosList).toHaveLength(2);

    act(() => result.current.handleChangeFilter(TODO_FILTER.completed));

    expect(result.current.todosList).toHaveLength(1);
    expect(result.current.todosList[0].title).toEqual("new todo");

    act(() => result.current.handleChangeFilter(TODO_FILTER.active));

    expect(result.current.todosList).toHaveLength(1);
    expect(result.current.todosList[0].title).toEqual(mockedTodo.title);

    act(() => result.current.handleChangeFilter(TODO_FILTER.all));

    expect(result.current.todosList).toHaveLength(2);
});
