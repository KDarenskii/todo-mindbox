import { FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./alert.module.scss";

export enum ALERT {
    WARNING = "warning",
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info",
}

type Props = {
    type: ALERT;
    className?: string;
};

const Alert: FC<PropsWithChildren<Props>> = ({ children, type, className }) => {
    return (
        <div className={cn(styles.alert, styles[`alert--${type}`], className)}>
            {children}
        </div>
    );
};

export default Alert;
