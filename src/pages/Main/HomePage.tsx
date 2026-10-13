import { useState } from 'react';

import { BigLogo, IconSearch } from '@/assets';
import { Loader, Selector, StatusIndicator } from '@/shared/ui';
import { CustomTextInput } from '@/shared/ui/CustomTextInput/CustomTextInput';

import {
    OptionsSpecies,
    OptionsStatus,
    PlaceholderInputForm,
    PlaceholderInputSearch,
    PlaceholderSelectorSpecies,
    PlaceholderSelectorStatus,
    TextLoader,
} from './HomePage.constants';

import styles from './HomePage.module.css';

export const HomePage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [formValue, setFormValue] = useState('');
    const [species, setSpecies] = useState('');
    const [status, setStatus] = useState('');

    return (
        <section className={styles.pageContainer}>
            <img className={styles.logo} src={BigLogo} alt='Logo Rick and Morty' />
            <Loader text={TextLoader} textClassName='text_karla_bold_size-lg' />
            <div className={styles.contentContainer}>
                <CustomTextInput
                    id='name'
                    variant='bordered'
                    icon={<IconSearch />}
                    placeholder={PlaceholderInputSearch}
                    textStyle='text_roboto_regular_size-md'
                    iconClearSize='9px'
                    value={searchValue}
                    aria-label='Search characters'
                    onChange={(event) => setSearchValue(event.target.value)}
                    onClear={() => setSearchValue('')}
                    containerClassName={styles.inputContainerMedium}
                />
                <CustomTextInput
                    id='search-input'
                    variant='underlined'
                    placeholder={PlaceholderInputForm}
                    textStyle='text_roboto_regular_size-md'
                    iconClearSize='8px'
                    value={formValue}
                    aria-label='Enter namee'
                    onChange={(event) => setFormValue(event.target.value)}
                    onClear={() => setFormValue('')}
                    containerClassName={styles.inputContainerSmall}
                />

                <Selector
                    options={OptionsSpecies}
                    placeholder={PlaceholderSelectorSpecies}
                    size='large'
                    onChange={setSpecies}
                    value={species}
                />

                <Selector
                    options={OptionsStatus}
                    placeholder={PlaceholderSelectorStatus}
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
