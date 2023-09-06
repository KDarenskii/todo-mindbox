import { FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./tabButton.module.scss";

interface Props {
    className?: string;
    isActive?: boolean;
    onClick?: () => void;
    variant?: "danger" | "warning" | "success";
}

const TabButton: FC<PropsWithChildren<Props>> = ({
    className,
    children,
    isActive,
    onClick,
    variant,
}) => {
    return (
        <button
            className={cn(
                styles.button,
                isActive && styles["button--active"],
                variant && styles[`button--${variant}`],
                className,
            )}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    );
};

export default TabButton;
