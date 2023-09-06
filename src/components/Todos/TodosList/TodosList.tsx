import { FC } from "react";

import { ITodo } from "types/todo.interface";

import { TodoItem } from "../TodoItem";
import styles from "./todosList.module.scss";

interface Props {
    todos: ITodo[];
}

const TodosList: FC<Props> = ({ todos }) => {
    return (
        <ul className={styles.list}>
            {todos.map(({ id, isCompleted, title }) => (
                <TodoItem id={id} isCompleted={isCompleted} title={title} key={id} />
            ))}
        </ul>
    );
};

export default TodosList;
