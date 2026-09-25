import clsx from 'clsx';

import { LoadingImage } from '@/assets';

import { LoaderDefaultText } from './Loader.constants';

import styles from './Loader.module.css';

interface LoaderProps {
    text?: string;
    size?: 'small' | 'large';
    textClassName?: string;
}

export const Loader = ({ text, size = 'large', textClassName }: LoaderProps) => {
    return (
        <div className={clsx(styles.loaderContainer, styles[size])}>
            <img className={styles.loaderImage} src={LoadingImage} alt='Loading animation' />
            <p className={clsx(styles.text, textClassName)}>{text ?? LoaderDefaultText}</p>
        </div>
    );
};
