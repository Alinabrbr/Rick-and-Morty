import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>
                Made with love by{' '}
                <a className={styles.link} href='https://t.me/Alinabrbr' target='_blank' rel='noopener noreferrer'>
                    Alinabrbr
                </a>
            </span>
        </footer>
    );
};
