import { Link } from 'react-router-dom';

import { IconLogo } from '@/assets/icons';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/'>
                <IconLogo />
            </Link>
            <div>
                <button>Theme</button>
                <button>РУ</button>
            </div>
        </header>
    );
};
