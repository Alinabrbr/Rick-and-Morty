import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/helpers';

import styles from './NavLink.module.css';

interface NavLinkProps extends LinkProps {
    icon?: React.ReactNode;
    hoverable?: boolean;
}

export const NavLink = ({ icon, children, className, hoverable = true, ...rest }: NavLinkProps) => {
    return (
        <Link className={classNames(styles.navLink, { [styles.hovered]: hoverable }, className)} {...rest}>
            {icon}
            {children && <span>{children}</span>}
        </Link>
    );
};
