import { classNames } from '@/shared/helpers';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
}

export const Button = ({ icon, children, className, ...rest }: ButtonProps) => {
    return (
        <button className={classNames(styles.button, className)} {...rest}>
            {icon}
            {children && <span>{children}</span>}
        </button>
    );
};
