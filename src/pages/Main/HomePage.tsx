import { BigLogo } from '@/assets/images';
import { Loader } from '@/shared/ui';

import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
        <section className={styles.pageContainer}>
            <img className={styles.logo} src={BigLogo} alt='Logo Rick and Morty' />
            <Loader text='Loading characters...' />
        </section>
    );
};
