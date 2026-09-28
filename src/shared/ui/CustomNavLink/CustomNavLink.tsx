import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './CustomNavLink.module.css';

interface CustomNavLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
    icon?: React.ReactNode;
    textClassName?: string;
}

export const CustomNavLink = ({ icon, children, className, textClassName, ...rest }: CustomNavLinkProps) => {
    return (
        <Link className={clsx(styles.navLink, className)} {...rest}>
            {icon}
            <span className={textClassName}>{children}</span>
        </Link>
    );
};
