import { FormEvent, useState } from "react";

const useTodoForm = (defaultValue = "") => {
    const [todoValue, setTodoValue] = useState(defaultValue);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return { todoValue, setTodoValue, handleSubmit };
};

export default useTodoForm;
