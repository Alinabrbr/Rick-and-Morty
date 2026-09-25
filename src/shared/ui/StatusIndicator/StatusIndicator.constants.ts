export const STATUS_COLOR = {
    alive: '#22c55e', // зелёный
    dead: '#eab308', // жёлтый
    unknown: '#ef4444', // красный
} as const;

export const STATUS_INDICATOR_SIZE = {
    small: 10,
    large: 20,
} as const;

export type StatusIndicatorSize = keyof typeof STATUS_INDICATOR_SIZE;
export type StatusIndicatorStatus = keyof typeof STATUS_COLOR;
