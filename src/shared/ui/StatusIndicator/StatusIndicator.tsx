import { classNames } from '@/shared/helpers';
import type { Status } from '@/shared/types/type';

import styles from './StatusIndicator.module.scss';

interface StatusIndicatorProps {
    status: Status;
    size?: 'small' | 'large';
}

export const StatusIndicator = ({ status, size = 'small' }: StatusIndicatorProps) => {
    return <div className={classNames(styles.circle, styles[size])} data-status={status} />;
};
