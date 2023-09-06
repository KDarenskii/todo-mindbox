import { FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./checkboxControl.module.scss";

interface Props {
    className?: string;
}

const CheckboxControl: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return <div className={cn(styles.control, className)}>{children}</div>;
};

export default CheckboxControl;
