import { IconLogo } from '@/assets';
import { CustomNavLink } from '@/shared/ui';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <CustomNavLink to='/' aria-label='Rick and Morty — home' textClassName='text_karla_bold_size-lg'>
                <IconLogo aria-hidden='true' />
            </CustomNavLink>
            <div>
                <button>Theme</button>
                <button>РУ</button>
            </div>
        </header>
    );
};
