import { LoadingImage } from '@/assets';
import { classNames } from '@/shared/helpers';

import { LOADER_DEFAULT_TEXT } from './constants';

import styles from './Loader.module.scss';

interface LoaderProps {
    text?: string;
    mode?: 'small' | 'large';
}

export const Loader = ({ text, mode = 'large' }: LoaderProps) => {
    return (
        <div className={classNames(styles.loaderContainer, styles[mode])}>
            <img className={styles.loaderImage} src={LoadingImage} alt='' />
            <p className={styles.text}>{text ?? LOADER_DEFAULT_TEXT}</p>
        </div>
    );
};
