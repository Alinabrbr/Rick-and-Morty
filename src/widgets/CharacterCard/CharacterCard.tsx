import { type ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { IconCheck, IconClose, IconEdit } from '@/assets';
import { classNames } from '@/shared/helpers';
import type { Character, Status } from '@/shared/types/type.ts';
import { IconButton, Selector, StatusIndicator, TextInput } from '@/shared/ui';

import { CHARACTER_CARD_LABEL_INPUTS, STATUS_OPTIONS } from './constants.ts';

import styles from './CharacterCard.module.scss';

interface StatusOptionProps {
    option: { label: string; value: Status };
}

const StatusOption = ({ option }: StatusOptionProps) => (
    <div className={styles.optionComponentWrapper}>
        <span>{option.label}</span>
        <StatusIndicator status={option.value} />
    </div>
);

interface CharacterCardProps {
    card: Character;
}

export const CharacterCard = ({ card }: CharacterCardProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(card.name);
    const [gender, setGender] = useState<string>(card.gender);
    const [species, setSpecies] = useState<string>(card.species);
    const [location, setLocation] = useState<string>(card.location);
    const [status, setStatus] = useState<Status>(card.status);
    const [isHoveredCard, setIsHoveredCard] = useState<boolean>(false);

    const handleEdit = () => setIsEditing(true);
    const handleCancel = () => {
        setName(card.name);
        setGender(card.gender);
        setSpecies(card.species);
        setLocation(card.location);
        setStatus(card.status);
        setIsEditing(false);
    };
    const handleSave = () => setIsEditing(false);

    return (
        <div
            className={styles.containerCard}
            onMouseEnter={() => setIsHoveredCard(true)}
            onMouseLeave={() => setIsHoveredCard(false)}
        >
            <img className={styles.image} alt='card image' src={card.image} />
            <div className={styles.cardInfo}>
                {isEditing ? (
                    <>
                        <TextInput
                            label={CHARACTER_CARD_LABEL_INPUTS.name}
                            value={name}
                            variant='underlined'
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                            onClear={() => setName('')}
                            className={classNames(styles.input, styles.textLink, 'text_roboto_medium_size-xl')}
                        />
                        <div className={styles.textBlock}>
                            <p className={classNames(styles.text, styles.textLabel, 'text_roboto_medium_size-md')}>
                                {CHARACTER_CARD_LABEL_INPUTS.gender}
                            </p>
                            <p className={classNames(styles.text, 'text_roboto_regular_size-sm')}>{gender}</p>
                        </div>
                        <div className={styles.textBlock}>
                            <p className={classNames(styles.text, styles.textLabel, 'text_roboto_medium_size-md')}>
                                {CHARACTER_CARD_LABEL_INPUTS.species}
                            </p>
                            <p className={classNames(styles.text, 'text_roboto_regular_size-sm')}>{species}</p>
                        </div>
                        <TextInput
                            label={CHARACTER_CARD_LABEL_INPUTS.location}
                            value={location}
                            variant='underlined'
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setLocation(event.target.value)}
                            onClear={() => setLocation('')}
                            className={classNames(styles.input, 'text_roboto_regular_size-sm')}
                            containerClassName={styles.containerInput}
                        />
                        <div className={styles.selectorContainer}>
                            <p className={classNames(styles.text, styles.textLabel, 'text_roboto_medium_size-md')}>
                                {CHARACTER_CARD_LABEL_INPUTS.status}
                            </p>
                            <Selector
                                options={STATUS_OPTIONS}
                                value={status}
                                onChange={setStatus}
                                size='small'
                                OptionComponent={StatusOption}
                            />
                        </div>
                        <div className={styles.containerIcon}>
                            <IconButton icon={<IconClose />} onClick={handleCancel} />
                            <IconButton icon={<IconCheck />} onClick={handleSave} />
                        </div>
                    </>
                ) : (
                    <>
                        <Link
                            to={`/details/:${card.id}`}
                            className={classNames(styles.textLink, styles.textWithBorder, 'text_roboto_medium_size-xl')}
                        >
                            {name}
                        </Link>
                        <div className={styles.textBlock}>
                            <p className={classNames(styles.text, styles.textLabel, 'text_roboto_medium_size-md')}>
                                {CHARACTER_CARD_LABEL_INPUTS.gender}
                            </p>
                            <p className={classNames(styles.text, 'text_roboto_regular_size-sm')}>{gender}</p>
                        </div>
                        <div className={styles.textBlock}>
                            <p className={classNames(styles.text, styles.textLabel, 'text_roboto_medium_size-md')}>
                                {CHARACTER_CARD_LABEL_INPUTS.species}
                            </p>
                            <p className={classNames(styles.text, 'text_roboto_regular_size-sm')}>{species}</p>
                        </div>
                        <div className={styles.textBlock}>
                            <p className={classNames(styles.text, styles.textLabel, 'text_roboto_medium_size-md')}>
                                {CHARACTER_CARD_LABEL_INPUTS.location}
                            </p>
                            <p
                                className={classNames(
                                    styles.text,
                                    styles.textWithBorder,
                                    'text_roboto_regular_size-sm',
                                )}
                            >
                                {location}
                            </p>
                        </div>
                        <div className={styles.textBlock}>
                            <p className={classNames(styles.text, styles.textLabel, 'text_roboto_medium_size-md')}>
                                {CHARACTER_CARD_LABEL_INPUTS.status}
                            </p>
                            <div className={styles.textWithIcon}>
                                <p className={classNames(styles.text, 'text_roboto_regular_size-sm')}>{status}</p>
                                <StatusIndicator status={status} />
                            </div>
                        </div>
                        {isHoveredCard && (
                            <IconButton icon={<IconEdit className={styles.icon} />} onClick={handleEdit} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
