import { STATUS_COLOR, STATUS_INDICATOR_SIZE, type StatusIndicatorSize, type StatusIndicatorStatus } from './constants';

import styles from './StatusIndicator.module.scss';

interface StatusIndicatorProps {
    size?: StatusIndicatorSize;
    status?: StatusIndicatorStatus;
}

export const StatusIndicator = ({ status = 'Alive', size = 'small' }: StatusIndicatorProps) => {
    const backgroundColor = STATUS_COLOR[status];

    return (
        <div
            className={styles.circle}
            style={{
                width: STATUS_INDICATOR_SIZE[size],
                height: STATUS_INDICATOR_SIZE[size],
                backgroundColor,
            }}
        />
    );
};
