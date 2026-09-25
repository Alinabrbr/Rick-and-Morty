import {
    STATUS_COLOR,
    STATUS_INDICATOR_SIZE,
    type StatusIndicatorSize,
    type StatusIndicatorStatus,
} from './StatusIndicator.constants';

import styles from './StatusIndicator.module.css';

interface StatusIndicatorProps {
    size?: StatusIndicatorSize;
    status?: string;
}

const isValidStatus = (status: string): status is StatusIndicatorStatus => status in STATUS_COLOR;

export const StatusIndicator = ({ status = 'alive', size = 'small' }: StatusIndicatorProps) => {
    const lowerStatus = status.toLowerCase();
    const backgroundColor = isValidStatus(lowerStatus) ? STATUS_COLOR[lowerStatus] : STATUS_COLOR.alive;

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
