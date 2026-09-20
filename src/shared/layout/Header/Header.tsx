import { Link } from 'react-router-dom';

import { IconLogo } from '@/assets';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/' aria-label='Rick and Morty — home'>
                <IconLogo aria-hidden='true' />
            </Link>
            <div>
                <button>Theme</button>
                <button>РУ</button>
            </div>
        </header>
    );
};
