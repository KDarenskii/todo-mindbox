import { FC } from "react";

import { Input } from "components/ui/Input";

import styles from "./todoForm.module.scss";
import useTodoForm from "./useTodoForm";

interface Props {
    onSubmit: (title: string) => void;
}

const TodoForm: FC<Props> = ({ onSubmit }) => {
    const { todoValue, setTodoValue, handleSubmit } = useTodoForm(onSubmit);

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
