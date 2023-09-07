import React, { FormEvent } from "react";

import { act, renderHook } from "@testing-library/react";

import useTodoForm from "./useTodoForm";

const testValue = "test_value";

test("should provide default value", () => {
    const { result } = renderHook(() => useTodoForm(() => {}, testValue));

    expect(result.current.todoValue).toEqual(testValue);
});

test("should set state", () => {
    const { result } = renderHook(() => useTodoForm(() => {}, testValue));

    expect(result.current.todoValue).toEqual(testValue);

    act(() => result.current.setTodoValue("new value"));

    expect(result.current.todoValue).toEqual("new value");
});

test("should reset state after submit", () => {
    const { result } = renderHook(() => useTodoForm(() => {}, testValue));

    expect(result.current.todoValue).toEqual(testValue);

    act(() => result.current.handleSubmit());

    expect(result.current.todoValue).toEqual("");
});

test("should invoke onSubmit when todo value is not empty", () => {
    const onSubmitFn = jest.fn();

    const { result } = renderHook(() => useTodoForm(onSubmitFn, testValue));

    act(() => result.current.handleSubmit());

    expect(onSubmitFn).toBeCalledTimes(1);
    expect(onSubmitFn).toBeCalledWith(testValue);
});

test("should not invoke onSubmit when todo value is not empty", () => {
    const onSubmitFn = jest.fn();

    const { result } = renderHook(() => useTodoForm(onSubmitFn, ""));

    act(() => result.current.handleSubmit());

    expect(onSubmitFn).toBeCalledTimes(0);
});
