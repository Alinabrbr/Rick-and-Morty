import { useState } from 'react';

import { BigLogo, IconSearch } from '@/assets';
import { Loader, Selector, StatusIndicator } from '@/shared/ui';
import { TextInput } from '@/shared/ui';

import {
    LOADER_TEXT,
    OPTIONS_SPECIES,
    OPTIONS_STATUS,
    PLACEHOLDER_FORM_INPUT,
    PLACEHOLDER_SEARCH_INPUT,
    PLACEHOLDER_SPECIES_SELECTOR,
    PLACEHOLDER_STATUS_SELECTOR,
} from './constants';

import styles from './HomePage.module.css';

export const HomePage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [formValue, setFormValue] = useState('');
    const [species, setSpecies] = useState('');
    const [status, setStatus] = useState('');

    return (
        <section className={styles.pageContainer}>
            <img className={styles.logo} src={BigLogo} alt='Logo Rick and Morty' />
            <Loader text={LOADER_TEXT} className='text_karla_bold_size-lg' />
            <div className={styles.contentContainer}>
                <TextInput
                    id='name'
                    variant='bordered'
                    icon={<IconSearch />}
                    placeholder={PLACEHOLDER_SEARCH_INPUT}
                    className='text_roboto_regular_size-md'
                    iconClearSize='9px'
                    value={searchValue}
                    aria-label='Search characters'
                    onChange={(event) => setSearchValue(event.target.value)}
                    onClear={() => setSearchValue('')}
                    containerClassName={styles.inputContainerMedium}
                />
                <TextInput
                    id='search-input'
                    variant='underlined'
                    placeholder={PLACEHOLDER_FORM_INPUT}
                    className='text_roboto_regular_size-md'
                    iconClearSize='8px'
                    value={formValue}
                    aria-label='Enter name'
                    onChange={(event) => setFormValue(event.target.value)}
                    onClear={() => setFormValue('')}
                    containerClassName={styles.inputContainerSmall}
                />

                <Selector
                    options={OPTIONS_SPECIES}
                    placeholder={PLACEHOLDER_SPECIES_SELECTOR}
                    size='large'
                    onChange={setSpecies}
                    value={species}
                />

                <Selector
                    options={OPTIONS_STATUS}
                    placeholder={PLACEHOLDER_STATUS_SELECTOR}
                    size='large'
                    onChange={setStatus}
                    value={status}
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
