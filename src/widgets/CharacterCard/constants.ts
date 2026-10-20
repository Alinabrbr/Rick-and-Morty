import { type Status, STATUSES } from '@/shared/types/type';

export const STATUS_OPTIONS: Array<{ label: Status; value: Status }> = STATUSES.map((status) => ({
    label: status,
    value: status,
}));

export const CHARACTER_FIELD_LABELS = {
    gender: 'Gender',
    species: 'Species',
    location: 'Location',
    status: 'Status',
} as const;
