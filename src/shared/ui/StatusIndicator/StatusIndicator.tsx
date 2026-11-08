import type { Status } from '@/shared/types/type';

import styles from './StatusIndicator.module.scss';

interface StatusIndicatorProps {
    status: Status;
}

export const StatusIndicator = ({ status }: StatusIndicatorProps) => {
    return <div className={styles.circle} data-status={status} />;
};
