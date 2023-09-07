import { useMemo, useState } from "react";

import { nanoid } from "nanoid";

import { ITodo } from "types/todo.interface";
import { TODO_FILTER } from "types/todoFilter.enum";

const useTodos = () => {
    const [todosList, setTodosList] = useState<ITodo[]>([]);
    const [activeFilter, setActiveFilter] = useState<TODO_FILTER>(
        TODO_FILTER.all,
    );
    const [error, setError] = useState<string | null>(null);

    const filteredTodos = useMemo(() => {
        if (activeFilter === TODO_FILTER.completed) {
            return todosList.filter((todo) => todo.isCompleted);
        }
        if (activeFilter === TODO_FILTER.active) {
            return todosList.filter((todo) => !todo.isCompleted);
        }
        return todosList;
    }, [activeFilter, todosList]);

    const handleAddTodo = (title: string) => {
        const isExisting = todosList.find((todo) => todo.title === title);

        if (isExisting) {
            setError("Todo is already existing");
            return;
        }

        const newTodo: ITodo = {
            title,
            id: nanoid(),
            isCompleted: false,
        };
        setTodosList((todos) => [newTodo, ...todos]);
    };

    const handleDeleteTodos = () => {
        setTodosList((todos) => todos.filter((todo) => !todo.isCompleted));
    };

    const handleToggleStatus = (id: string) => {
        setTodosList((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                }
                return todo;
            }),
        );
    };

    const handleChangeFilter = (filter: TODO_FILTER) => {
        setActiveFilter(filter);
    };

    const handleResetError = () => {
        setError(null);
    };

    return {
        todosList: filteredTodos,
        handleAddTodo,
        handleDeleteTodos,
        handleToggleStatus,
        activeFilter,
        handleChangeFilter,
        error,
        handleResetError,
    };
};

export default useTodos;
