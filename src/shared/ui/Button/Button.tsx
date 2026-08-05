import clsx from 'clsx';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    textClassName?: string;
}

export const Button = ({ icon, children, className, textClassName, ...rest }: ButtonProps) => {
    return (
        <button className={clsx(styles.button, className)} {...rest}>
            {icon}
            <span className={textClassName}>{children}</span>
        </button>
    );
};
