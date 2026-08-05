import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './NavLink.module.css';

interface NavLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
    icon?: React.ReactNode;
    textClassName?: string;
}

export const NavLink = ({ icon, children, className, textClassName, ...rest }: NavLinkProps) => {
    return (
        <Link className={clsx(styles.navLink, className)} {...rest}>
            {icon}
            <span className={clsx('text_karla_bold_size-lg', textClassName)}>{children}</span>
        </Link>
    );
};
