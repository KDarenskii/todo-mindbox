import { FC, ReactNode } from "react";

import cn from "clsx";

import styles from "./checkbox.module.scss";

interface Props {
    isChecked: boolean;
    className?: string;
    label?: ReactNode;
    onClick?: () => void;
}

const Checkbox: FC<Props> = ({ isChecked, className, label }) => {
    return (
        <div
            className={cn(
                styles.checkbox,
                isChecked && styles["checkbox--checked"],
                className,
            )}
        >
            {label && <span>{label}</span>}
        </div>
    );
};

export default Checkbox;
