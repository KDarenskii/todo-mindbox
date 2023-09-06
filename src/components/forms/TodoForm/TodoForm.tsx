import { FC } from "react";

import { Input } from "components/ui/Input";

import styles from "./todoForm.module.scss";
import useTodoForm from "./useTodoForm";

interface Props {}

const TodoForm: FC<Props> = () => {
    const { todoValue, setTodoValue, handleSubmit } = useTodoForm();

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                value={todoValue}
                onChange={(event) => setTodoValue(event.target.value)}
                placeholder="What needs to be done?"
            />
        </form>
    );
};

export default TodoForm;
