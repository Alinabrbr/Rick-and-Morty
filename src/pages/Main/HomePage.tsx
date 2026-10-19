import { useState } from 'react';

import { BigLogo } from '@/assets';
import { CHARACTER_MOCK } from '@/shared/constants/constants';
import { Loader } from '@/shared/ui';
import { CharacterCard } from '@/widgets';

import { LOADER_TEXT } from './constants';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <section className={styles.pageContainer}>
            <img className={styles.logo} src={BigLogo} alt='Logo Rick and Morty' />
            <div className={styles.contentContainer}>
                {isLoading ? (
                    <Loader text={LOADER_TEXT} className='text_karla_bold_size-lg' />
                ) : (
                    CHARACTER_MOCK.map((card) => (
                        <CharacterCard key={card.id} card={card} />
                    ))
                )}
            </div>
        </section>
    );
};
