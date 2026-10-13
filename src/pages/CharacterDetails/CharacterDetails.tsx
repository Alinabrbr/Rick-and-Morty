import { IconArrowLeft } from '@/assets';
import { classNames } from '@/shared/helpers';
import { Loader, NavLink } from '@/shared/ui';

import styles from './CharacterDetails.module.css';

export const CharacterDetails = () => {
    return (
        <section className={styles.pageContainer}>
            <div className={styles.linkContainer}>
                <NavLink
                    to='/'
                    icon={<IconArrowLeft />}
                    className={classNames(styles.linkText, 'text_karla_bold_size-lg')}
                >
                    go back
                </NavLink>
            </div>
            <Loader text='Loading character card...' className='text_karla_bold_size-lg' />
        </section>
    );
};
