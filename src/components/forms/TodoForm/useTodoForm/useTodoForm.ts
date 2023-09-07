import { FormEvent, useState } from "react";

const useTodoForm = (onSubmit?: (title: string) => void, defaultValue = "") => {
    const [todoValue, setTodoValue] = useState(defaultValue);

    const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        const value = todoValue.trim();

        if (value.length < 1) return;

        onSubmit && onSubmit(value);

        setTodoValue("");
    };

    return { todoValue, setTodoValue, handleSubmit };
};

export default useTodoForm;
