import { Link } from 'react-router-dom';

import { IconLogo } from '@/assets';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/' aria-label='Rick and Morty — home' className={styles.logoLink}>
                <IconLogo aria-hidden='true' />
            </Link>
            <div>
                <button type='button'>Theme</button>
                <button type='button'>РУ</button>
            </div>
        </header>
    );
};
