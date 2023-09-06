import { FC } from "react";

import { TodoForm } from "components/forms/TodoForm";

import { TodosControls } from "./TodosControls";
import { TodosList } from "./TodosList";
import styles from "./todos.module.scss";
import useTodos from "./useTodos";

const Todos: FC = () => {
    const {
        todosList,
        activeFilter,
        handleChangeFilter,
        handleDeleteTodos,
        handleAddTodo,
        handleToggleStatus,
    } = useTodos();

    return (
        <section>
            <h1 className={styles.title}>Todos</h1>
            <TodoForm onSubmit={handleAddTodo} />
            <TodosList todos={todosList} toggleTodo={handleToggleStatus} />
            <TodosControls
                activeFilter={activeFilter}
                todosCount={todosList.length}
                changeFilter={handleChangeFilter}
                deleteTodos={handleDeleteTodos}
            />
        </section>
    );
};

export default Todos;
