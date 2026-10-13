import { IconArrowLeft } from '@/assets';
import { customClassNames } from '@/shared/helpers';
import { CustomNavLink, Loader } from '@/shared/ui';

import styles from './CharacterDetails.module.css';

export const CharacterDetails = () => {
    return (
        <section className={styles.pageContainer}>
            <div className={styles.linkContainer}>
                <CustomNavLink
                    to='/'
                    icon={<IconArrowLeft />}
                    textClassName={customClassNames(styles.linkText, 'text_karla_bold_size-lg')}
                >
                    go back
                </CustomNavLink>
            </div>
            <Loader text='Loading character card...' textClassName='text_karla_bold_size-lg' />
        </section>
    );
};
