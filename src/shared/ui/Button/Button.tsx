import { classNames } from '@/shared/helpers';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    mode?: 'default' | 'icon';
    hoverable?: boolean;
}

export const Button = ({ icon, children, className, mode = 'default', hoverable = true, ...rest }: ButtonProps) => {
    return (
        <button
            className={classNames(
                styles.button,
                { [styles.icon]: mode === 'icon', [styles.hoverable]: hoverable },
                className,
            )}
            {...rest}
        >
            {icon}
            {children && <span>{children}</span>}
        </button>
    );
};
