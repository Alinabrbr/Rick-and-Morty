import clsx from 'clsx';

import { LoadingImage } from '@/assets/images';

import styles from './Loader.module.css';

interface LoaderProps {
    text?: string;
    typeSize?: 'small' | 'large';
}

export const Loader = ({ text, typeSize = 'large' }: LoaderProps) => {
    return (
        <div className={clsx(styles.loaderContainer, styles[typeSize])}>
            <img className={styles.loaderImage} src={LoadingImage} alt='Loader' />
            {text && <p className={clsx(styles.text, 'text_karla_bold_size-lg')}>{text}</p>}
        </div>
    );
};
