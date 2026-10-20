import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { IconCheck, IconClose, IconEdit } from '@/assets';
import { classNames } from '@/shared/helpers';
import type { Character, Status } from '@/shared/types/type';
import { IconButton, Selector, StatusIndicator, TextInput } from '@/shared/ui';

import { CHARACTER_FIELD_LABELS, STATUS_OPTIONS } from './constants';
import { useCharacterEditor } from './useCharacterEditor';

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

interface CardFieldProps {
    label: string;
    children: ReactNode;
    className?: string;
}

const CardField = ({ label, children, className }: CardFieldProps) => (
    <div className={classNames(styles.textBlock, className)}>
        <p className={styles.textLabel}>{label}</p>
        {children}
    </div>
);

interface CharacterCardProps {
    character: Character;
    onSave: (character: Character) => void;
}

export const CharacterCard = ({ character, onSave }: CharacterCardProps) => {
    const { draft, startEditing, cancelEditing, updateDraft, saveDraft } = useCharacterEditor(character, onSave);
    const isEditing = draft !== null;

    return (
        <article className={styles.containerCard}>
            <img className={styles.image} alt='' src={character.image} />
            <div className={styles.cardInfo}>
                {isEditing ? (
                    <TextInput
                        value={draft.name}
                        variant='underlined'
                        onChange={(event) => updateDraft({ name: event.target.value })}
                        onClear={() => updateDraft({ name: '' })}
                        className={styles.textLink}
                    />
                ) : (
                    <h2 className={styles.textWithBorder}>
                        <Link to={`/details/${character.id}`} className={styles.textLink}>
                            {character.name}
                        </Link>
                    </h2>
                )}
                <CardField label={CHARACTER_FIELD_LABELS.gender}>
                    <p className={styles.text}>{character.gender}</p>
                </CardField>
                <CardField label={CHARACTER_FIELD_LABELS.species}>
                    <p className={styles.text}>{character.species}</p>
                </CardField>
                {isEditing ? (
                    <TextInput
                        label={CHARACTER_FIELD_LABELS.location}
                        value={draft.location}
                        variant='underlined'
                        onChange={(event) => updateDraft({ location: event.target.value })}
                        onClear={() => updateDraft({ location: '' })}
                        className={styles.input}
                    />
                ) : (
                    <CardField label={CHARACTER_FIELD_LABELS.location}>
                        <p className={classNames(styles.text, styles.textWithBorder)}>{character.location}</p>
                    </CardField>
                )}
                <CardField
                    label={CHARACTER_FIELD_LABELS.status}
                    className={classNames(styles.statusBlock, { [styles.selectorContainer]: isEditing })}
                >
                    {isEditing ? (
                        <Selector
                            options={STATUS_OPTIONS}
                            value={draft.status}
                            onChange={(status) => updateDraft({ status })}
                            size='small'
                            OptionComponent={StatusOption}
                        />
                    ) : (
                        <div className={styles.textWithIcon}>
                            <p className={styles.text}>{character.status}</p>
                            <StatusIndicator status={character.status} />
                        </div>
                    )}
                </CardField>
            </div>
            <div className={styles.containerIcon}>
                {isEditing ? (
                    <>
                        <IconButton icon={<IconClose />} onClick={cancelEditing} aria-label='Cancel editing' />
                        <IconButton icon={<IconCheck />} onClick={saveDraft} aria-label='Save changes' />
                    </>
                ) : (
                    <IconButton
                        icon={<IconEdit />}
                        onClick={startEditing}
                        aria-label='Edit character'
                        className={styles.editButton}
                    />
                )}
            </div>
        </article>
    );
};
