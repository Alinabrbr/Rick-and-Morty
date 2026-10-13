import { Link } from 'react-router-dom';

import { customClassNames } from '@/shared/helpers';

import styles from './CustomNavLink.module.css';

interface CustomNavLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
    icon?: React.ReactNode;
    textClassName?: string;
    isHover?: boolean;
}

export const CustomNavLink = ({
    icon,
    children,
    className,
    textClassName,
    isHover = true,
    ...rest
}: CustomNavLinkProps) => {
    return (
        <Link className={customClassNames(styles.navLink, { [styles.hovered]: isHover }, className)} {...rest}>
            {icon}
            {children && <span className={textClassName}>{children}</span>}
        </Link>
    );
};
