import { FC } from "react";

import { ITodo } from "types/todo.interface";

import { TodoItem } from "../TodoItem";
import styles from "./todosList.module.scss";

interface Props {
    todos: ITodo[];
    toggleTodo: (id: string) => void;
}

const TodosList: FC<Props> = ({ todos, toggleTodo }) => {
    return (
        <ul className={styles.list}>
            {todos.map(({ id, isCompleted, title }) => (
                <TodoItem
                    isCompleted={isCompleted}
                    title={title}
                    onClick={() => toggleTodo(id)}
                    key={id}
                />
            ))}
        </ul>
    );
};

export default TodosList;
