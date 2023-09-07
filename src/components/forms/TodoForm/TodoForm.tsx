import { FC } from "react";

import { Input } from "components/ui/Input";

import styles from "./todoForm.module.scss";
import useTodoForm from "./useTodoForm/useTodoForm";

interface Props {
    onSubmit?: (title: string) => void;
    resetError?: () => void;
}

const TodoForm: FC<Props> = ({ onSubmit, resetError }) => {
    const { todoValue, setTodoValue, handleSubmit } = useTodoForm(onSubmit);

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
            onChange={resetError}
        >
            <Input
                value={todoValue}
                onChange={(event) => setTodoValue(event.target.value)}
                placeholder="What needs to be done?"
            />
        </form>
    );
};

export default TodoForm;
