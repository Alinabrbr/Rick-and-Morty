import { classNames } from '@/shared/helpers';

import styles from './IconButton.module.scss';

interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    icon: React.ReactNode;
    'aria-label': string;
}

export const IconButton = ({ icon, className, ...rest }: IconButtonProps) => {
    return (
        <button type='button' className={classNames(styles.button, className)} {...rest}>
            {icon}
        </button>
    );
};
