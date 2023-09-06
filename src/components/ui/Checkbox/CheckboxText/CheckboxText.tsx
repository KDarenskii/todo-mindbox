import { FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./checkboxText.module.scss";

interface Props {
    className?: string;
    isChecked?: boolean;
}

const CheckboxText: FC<PropsWithChildren<Props>> = ({
    children,
    className,
    isChecked,
}) => {
    return (
        <span
            className={cn(
                styles.text,
                isChecked && styles["text--checked"],
                className,
            )}
        >
            {children}
        </span>
    );
};

export default CheckboxText;
