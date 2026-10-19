import { classNames } from '@/shared/helpers';

import styles from './IconButton.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    hoverable?: boolean;
}

export const IconButton = ({ icon, onClick, children, className, ...rest }: ButtonProps) => {
    return (
        <button className={classNames(styles.button, className)} {...rest} onClick={onClick} type='button'>
            {icon}
        </button>
    );
};
