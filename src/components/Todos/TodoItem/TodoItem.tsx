import { FC } from "react";

import {
    Checkbox,
    CheckboxControl,
    CheckboxText,
} from "components/ui/Checkbox";

import styles from "./todoItem.module.scss";

interface Props {
    title: string;
    isCompleted: boolean;
    onClick: () => void;
}

const TodoItem: FC<Props> = ({ isCompleted, title, onClick }) => {
    return (
        <li className={styles.item} onClick={onClick}>
            <CheckboxControl>
                <Checkbox isChecked={isCompleted} />
                <CheckboxText isChecked={isCompleted}>{title}</CheckboxText>
            </CheckboxControl>
        </li>
    );
};

export default TodoItem;
