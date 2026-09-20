import { IconArrowLeft } from '@/assets';
import { CustomNavLink, Loader } from '@/shared/ui';

import styles from './CharacterDetails.module.css';

export const CharacterDetails = () => {
    return (
        <section className={styles.pageContainer}>
            <div className={styles.linkContainer}>
                <CustomNavLink to='/' rel='noreferrer' icon={<IconArrowLeft />} textClassName={styles.linkText}>
                    go back
                </CustomNavLink>
            </div>
            <Loader text='Loading character card...' />
        </section>
    );
};
