import { FC } from "react";

import {
    Checkbox,
    CheckboxControl,
    CheckboxText,
} from "components/ui/Checkbox";

import styles from "./todoItem.module.scss";

interface Props {
    id: string;
    title: string;
    isCompleted: boolean;
}

const TodoItem: FC<Props> = ({ id, isCompleted, title }) => {
    return (
        <li className={styles.item}>
            <CheckboxControl>
                <Checkbox isChecked={isCompleted} />
                <CheckboxText isChecked={isCompleted}>{title}</CheckboxText>
            </CheckboxControl>
        </li>
    );
};

export default TodoItem;
