import { FC } from "react";

import { TodoForm } from "components/forms/TodoForm";
import { ALERT, Alert } from "components/ui/Alert";

import { TodosControls } from "./TodosControls";
import { TodosList } from "./TodosList";
import styles from "./todos.module.scss";
import useTodos from "./useTodos/useTodos";

const Todos: FC = () => {
    const {
        todosList,
        activeFilter,
        handleChangeFilter,
        handleDeleteTodos,
        handleAddTodo,
        handleToggleStatus,
        error,
        handleResetError,
    } = useTodos();

    return (
        <section>
            <h1 className={styles.title}>Todos</h1>
            {error && (
                <Alert className={styles.alert} type={ALERT.ERROR}>
                    {error}
                </Alert>
            )}
            <TodoForm onSubmit={handleAddTodo} resetError={handleResetError} />
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
