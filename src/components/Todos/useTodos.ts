import { useMemo, useState } from "react";

import { nanoid } from "nanoid";

import { ITodo } from "types/todo.interface";
import { TODO_FILTER } from "types/todoFilter.enum";

const todos = [
    { id: "1", isCompleted: true, title: "Todo 1" },
    { id: "2", isCompleted: true, title: "Todo 2" },
    { id: "3", isCompleted: false, title: "Todo 3" },
    { id: "4", isCompleted: true, title: "Todo 4" },
    { id: "5", isCompleted: true, title: "Todo 5" },
    { id: "6", isCompleted: false, title: "Todo 6" },
    { id: "7", isCompleted: true, title: "Todo 7" },
    { id: "8", isCompleted: true, title: "Todo 8" },
    { id: "9", isCompleted: false, title: "Todo 9" },
];

const useTodos = () => {
    const [todosList, setTodosList] = useState<ITodo[]>(todos);
    const [activeFilter, setActiveFilter] = useState<TODO_FILTER>(
        TODO_FILTER.all,
    );

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
        const newTodo: ITodo = { title, id: nanoid(), isCompleted: false };
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

    return {
        todosList: filteredTodos,
        handleAddTodo,
        handleDeleteTodos,
        handleToggleStatus,
        activeFilter,
        handleChangeFilter,
    };
};

export default useTodos;
