import clsx from 'clsx';

import { LoadingImage } from '@/assets';

import { LoaderDefaultText } from './Loader.constants';

import styles from './Loader.module.css';

interface LoaderProps {
    text?: string;
    mode?: 'small' | 'large';
    textClassName?: string;
}

export const Loader = ({ text, mode = 'large', textClassName = 'text_karla_bold_size-lg' }: LoaderProps) => {
    return (
        <div className={clsx(styles.loaderContainer, styles[mode])}>
            <img className={styles.loaderImage} src={LoadingImage} alt='Loading animation' />
            <p className={clsx(styles.text, textClassName)}>{text ?? LoaderDefaultText}</p>
        </div>
    );
};
