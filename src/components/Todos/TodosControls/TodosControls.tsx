import { FC } from "react";

import { TabButton } from "components/ui/TabButton";

import { TODO_FILTER } from "types/todoFilter.enum";

import styles from "./todosControls.module.scss";

interface Props {
    deleteTodos: () => void;
    activeFilter: TODO_FILTER;
    changeFilter: (filter: TODO_FILTER) => void;
    todosCount: number;
}

const TodosControls: FC<Props> = ({
    activeFilter,
    changeFilter,
    todosCount,
    deleteTodos,
}) => {
    return (
        <div className={styles.controls}>
            <span className={styles.counter}>{todosCount} items left</span>
            <div className={styles.filter}>
                <TabButton
                    onClick={() => changeFilter(TODO_FILTER.all)}
                    variant="danger"
                    isActive={activeFilter === TODO_FILTER.all}
                >
                    All
                </TabButton>
                <TabButton
                    onClick={() => changeFilter(TODO_FILTER.active)}
                    variant="warning"
                    isActive={activeFilter === TODO_FILTER.active}
                >
                    Active
                </TabButton>
                <TabButton
                    onClick={() => changeFilter(TODO_FILTER.completed)}
                    variant="success"
                    isActive={activeFilter === TODO_FILTER.completed}
                >
                    Completed
                </TabButton>
            </div>
            <button
                className={styles.deleteButton}
                type="button"
                onClick={deleteTodos}
            >
                Clear completed
            </button>
        </div>
    );
};

export default TodosControls;
