import clsx from 'clsx';

import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={clsx(styles.footer, 'text_karla_bold_size-lg')}>
            <span>
                Made with love by{' '}
                <a className={styles.link} href='https://t.me/Alinabrbr' target='_blank' rel='noopener noreferrer'>
                    Alinabrbr
                </a>
            </span>
        </footer>
    );
};
