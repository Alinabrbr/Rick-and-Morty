import { customClassNames } from '@/shared/helpers';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    mode?: 'default' | 'icon';
    textClassName?: string;
    isHover?: boolean;
}

export const Button = ({
    icon,
    children,
    className,
    textClassName,
    mode = 'default',
    isHover = true,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={customClassNames(
                styles.button,
                { [styles.icon]: mode === 'icon', [styles.hoverable]: isHover },
                className,
            )}
            {...rest}
        >
            {icon}
            {children && <span className={textClassName}>{children}</span>}
        </button>
    );
};
