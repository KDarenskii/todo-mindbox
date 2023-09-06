import { FC } from "react";

import { TodoForm } from "components/forms/TodoForm";

import { TodosControls } from "./TodosControls";
import { TodosList } from "./TodosList";
import styles from "./todos.module.scss";

const Todos: FC = () => {
    return (
        <section>
            <h1 className={styles.title}>Todos</h1>
            <TodoForm />
            <TodosList
                todos={[
                    { id: "1", isCompleted: true, title: "Create todo app" },
                    { id: "2", isCompleted: true, title: "Create todo app" },
                    { id: "3", isCompleted: false, title: "Create todo app" },
                    { id: "1", isCompleted: true, title: "Create todo app" },
                    { id: "2", isCompleted: true, title: "Create todo app" },
                    { id: "3", isCompleted: false, title: "Create todo app" },
                    { id: "1", isCompleted: true, title: "Create todo app" },
                    { id: "2", isCompleted: true, title: "Create todo app" },
                    { id: "3", isCompleted: false, title: "Create todo app" },
                ]}
            />
            <TodosControls />
        </section>
    );
};

export default Todos;
