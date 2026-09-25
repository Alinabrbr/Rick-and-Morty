import { useState } from 'react';

import { BigLogo } from '@/assets';
import { Loader, Selector, StatusIndicator } from '@/shared/ui';

import { OptionsSpecies, OptionsStatus, PlaceholderSpecies, PlaceholderStatus, TextLoader } from './HomePage.constants';

import styles from './HomePage.module.css';

export const HomePage = () => {
    const [value, setValue] = useState('');
    return (
        <section className={styles.pageContainer}>
            <img className={styles.logo} src={BigLogo} alt='Logo Rick and Morty' />
            <Loader text={TextLoader} textClassName='text_karla_bold_size-lg' />
            <div>
                <Selector
                    options={OptionsSpecies}
                    placeholder={PlaceholderSpecies}
                    size='large'
                    onChange={setValue}
                    value={value}
                />

                <Selector
                    options={OptionsStatus}
                    placeholder={PlaceholderStatus}
                    size='small'
                    onChange={setValue}
                    value={value}
                    OptionComponent={({ option }) => {
                        return (
                            <div className={styles.optionComponentWrapper}>
                                <span>{option.label}</span>
                                <StatusIndicator status={option.label} />
                            </div>
                        );
                    }}
                />
            </div>
        </section>
    );
};
