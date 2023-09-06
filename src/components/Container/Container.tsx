import React, { FC, PropsWithChildren } from "react";

import cn from "clsx";

import styles from "./container.module.scss";

interface Props {
    className?: string;
}

const Container: FC<PropsWithChildren<Props>> = ({ className, children }) => {
    return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Container;
