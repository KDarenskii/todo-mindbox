import { FC, InputHTMLAttributes } from "react";

import cn from "clsx";

import styles from "./input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<Props> = ({ className, ...rest }) => {
    return (
        <input className={cn(styles.input, className)} type="text" {...rest} />
    );
};

export default Input;
