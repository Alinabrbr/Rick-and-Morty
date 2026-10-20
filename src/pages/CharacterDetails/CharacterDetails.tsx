import { Link } from 'react-router-dom';

import { IconArrowLeft } from '@/assets';
import { Loader } from '@/shared/ui';

import styles from './CharacterDetails.module.scss';

export const CharacterDetails = () => {
    return (
        <section className={styles.pageContainer}>
            <div className={styles.linkContainer}>
                <Link to='/' className={styles.backLink}>
                    <IconArrowLeft aria-hidden='true' />
                    go back
                </Link>
            </div>
            <Loader text='Loading character card...' />
        </section>
    );
};
