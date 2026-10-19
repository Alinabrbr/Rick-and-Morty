export const STATUS_COLOR = {
    Alive: '#22c55e',
    Dead: '#eab308',
    Unknown: '#ef4444',
} as const;

export const STATUS_INDICATOR_SIZE = {
    small: 10,
    large: 20,
} as const;

export type StatusIndicatorSize = keyof typeof STATUS_INDICATOR_SIZE;
export type StatusIndicatorStatus = keyof typeof STATUS_COLOR;
