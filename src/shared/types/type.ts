export const STATUSES = ['Alive', 'Dead', 'Unknown'] as const;
export const GENDERS = ['Male', 'Female', 'Genderless', 'Unknown'] as const;
export const SPECIES = ['Human', 'Alien', 'Humanoid', 'Animal', 'Robot', 'Cronenberg', 'Disease', 'Unknown'] as const;

export type Status = (typeof STATUSES)[number];
export type Gender = (typeof GENDERS)[number];
export type Species = (typeof SPECIES)[number];

export interface Character {
    id: number;
    image: string;
    name: string;
    gender: Gender;
    species: Species;
    location: string;
    status: Status;
}
