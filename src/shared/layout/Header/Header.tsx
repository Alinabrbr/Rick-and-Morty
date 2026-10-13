import { IconLogo } from '@/assets';
import { NavLink } from '@/shared/ui';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to='/' aria-label='Rick and Morty — home' className='text_karla_bold_size-lg' hoverable={false}>
                <IconLogo aria-hidden='true' />
            </NavLink>
            <div>
                <button type='button'>Theme</button>
                <button type='button'>РУ</button>
            </div>
        </header>
    );
};
