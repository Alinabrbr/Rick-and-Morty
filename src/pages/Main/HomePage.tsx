import { useState } from 'react';

import { BigLogo } from '@/assets';
import {
    OptionsSpecies,
    OptionsStatus,
    PlaceholderSpecies,
    PlaceholderStatus,
    TextLoader,
} from '@/pages/Main/HomePage.constants';
import { Loader, Selector, StatusIndicator } from '@/shared/ui';

import styles from './HomePage.module.css';

export const HomePage = () => {
    const [value, setValue] = useState<string>('');
    return (
        <section className={styles.pageContainer}>
            <img className={styles.logo} src={BigLogo} alt='Logo Rick and Morty' />
            <Loader text={TextLoader} />
            <div>
                <Selector
                    options={OptionsSpecies}
                    placeholder={PlaceholderSpecies}
                    mode='large'
                    onChange={setValue}
                    value={value}
                />

                <Selector
                    options={OptionsStatus}
                    placeholder={PlaceholderStatus}
                    mode='small'
                    onChange={setValue}
                    value={value}
                    OptionComponent={({ option }) => {
                        return (
                            <div className={styles.optionComponentWrapper}>
                                <span>{option.label}</span>
                                <StatusIndicator status={option.label} aria-hidden='true' />
                            </div>
                        );
                    }}
                />
            </div>
        </section>
    );
};
