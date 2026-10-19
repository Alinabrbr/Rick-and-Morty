import { type Status, STATUSES } from '@/shared/types/type';

export const STATUS_OPTIONS: Array<{ label: Status; value: Status }> = STATUSES.map((status) => ({
    label: status,
    value: status,
}));

export const CHARACTER_CARD_LABEL_INPUTS = {
    name: '',
    gender: 'Gender',
    species: 'Species',
    location: 'Location',
    status: 'Status',
} as const;
