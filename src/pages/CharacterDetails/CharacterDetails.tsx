import { IconArrowLeft } from '@/assets/icons';
import { Loader, NavLink } from '@/shared/ui';

import styles from './CharacterDetails.module.css';

export const CharacterDetails = () => {
    return (
        <section className={styles.pageContainer}>
            <div className={styles.linkContainer}>
                <NavLink to='/' rel='noreferrer' icon={<IconArrowLeft />} textClassName={styles.linkText}>
                    go back
                </NavLink>
            </div>
            <Loader text='Loading character card...' />
        </section>
    );
};
