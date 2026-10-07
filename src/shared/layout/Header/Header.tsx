import { IconLogo } from '@/assets';
import { CustomNavLink } from '@/shared/ui';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <CustomNavLink
                to='/'
                aria-label='Rick and Morty — home'
                textClassName='text_karla_bold_size-lg'
                isHover={false}
            >
                <IconLogo aria-hidden='true' />
            </CustomNavLink>
            <div>
                <button type='button'>Theme</button>
                <button type='button'>РУ</button>
            </div>
        </header>
    );
};
