import { useState } from 'react';

import { BigLogo } from '@/assets';
import { CHARACTER_MOCK } from '@/shared/constants/constants';
import type { Character } from '@/shared/types/type';
import { Loader } from '@/shared/ui';
import { CharacterCard } from '@/widgets';

import { LOADER_TEXT } from './constants';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState(CHARACTER_MOCK);

    const handleSave = (updatedCharacter: Character) =>
        setCharacters((prev) =>
            prev.map((character) => (character.id === updatedCharacter.id ? updatedCharacter : character)),
        );

    return (
        <section className={styles.pageContainer}>
            <h1>
                <img className={styles.logo} src={BigLogo} alt='Rick and Morty' />
            </h1>
            {isLoading ? (
                <Loader text={LOADER_TEXT} />
            ) : (
                <ul className={styles.characterList} role='list'>
                    {characters.map((character) => (
                        <li key={character.id}>
                            <CharacterCard character={character} onSave={handleSave} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};
