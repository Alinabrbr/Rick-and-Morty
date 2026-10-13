import { LoadingImage } from '@/assets';
import { classNames } from '@/shared/helpers';

import { LOADER_DEFAULT_TEXT } from './constants';

import styles from './Loader.module.css';

interface LoaderProps {
    text?: string;
    mode?: 'small' | 'large';
    className?: string;
}

export const Loader = ({ text, mode = 'large', className }: LoaderProps) => {
    return (
        <div className={classNames(styles.loaderContainer, styles[mode])}>
            <img className={styles.loaderImage} src={LoadingImage} alt='Loading animation' />
            <p className={classNames(styles.text, className)}>{text ?? LOADER_DEFAULT_TEXT}</p>
        </div>
    );
};
