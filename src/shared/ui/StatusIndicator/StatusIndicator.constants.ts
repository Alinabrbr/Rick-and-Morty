export const STATUS_COLOR = {
    Alive: '#22c55e', // зелёный
    Dead: '#eab308', // жёлтый
    Unknown: '#ef4444', // красный
};

export const STATUS_INDICATOR_SIZE = {
    small: 10,
    large: 20,
} as const;

export type StatusIndicatorSize = keyof typeof STATUS_INDICATOR_SIZE;
export type StatusIndicatorStatus = keyof typeof STATUS_COLOR;
