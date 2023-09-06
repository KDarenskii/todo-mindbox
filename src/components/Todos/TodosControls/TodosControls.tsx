import { FC } from "react";

import { TabButton } from "components/ui/TabButton";

import styles from "./todosControls.module.scss";

const TodosControls: FC = () => {
    return (
        <div className={styles.controls}>
            <span className={styles.counter}>2 items left</span>
            <div className={styles.filter}>
                <TabButton variant="danger" isActive>All</TabButton>
                <TabButton variant="warning">Active</TabButton>
                <TabButton variant="success" isActive>Completed</TabButton>
            </div>
            <button className={styles.deleteButton} type="button">
                Clear completed
            </button>
        </div>
    );
};

export default TodosControls;
