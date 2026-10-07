import { LoadingImage } from '@/assets';
import { customClassNames } from '@/shared/helpers';

import { LoaderDefaultText } from './Loader.constants';

import styles from './Loader.module.css';

interface LoaderProps {
    text?: string;
    mode?: 'small' | 'large';
    textClassName?: string;
}

export const Loader = ({ text, mode = 'large', textClassName }: LoaderProps) => {
    return (
        <div className={customClassNames(styles.loaderContainer, styles[mode])}>
            <img className={styles.loaderImage} src={LoadingImage} alt='Loading animation' />
            <p className={customClassNames(styles.text, textClassName)}>{text ?? LoaderDefaultText}</p>
        </div>
    );
};
