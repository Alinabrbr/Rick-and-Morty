import { type InputHTMLAttributes, type ReactNode } from 'react';

import { IconClose } from '@/assets';
import { classNames } from '@/shared/helpers';
import { IconButton } from '@/shared/ui';

import styles from './TextInput.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onClear?: () => void;
    variant?: 'bordered' | 'underlined';
    icon?: ReactNode;
    label?: string;
}

export const TextInput = ({
    variant = 'bordered',
    value,
    onClear,
    className,
    icon,
    label,
    ...rest
}: TextInputProps) => {
    return (
        <div className={styles.inputContainer}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputWrapper}>
                {icon && <div className={styles.iconContainer}>{icon}</div>}
                <input className={classNames(styles.input, styles[variant], className)} value={value} {...rest} />
                {value && onClear && (
                    <IconButton
                        onClick={onClear}
                        aria-label='Clear text'
                        className={styles.button}
                        icon={<IconClose width={20} height={20} />}
                    />
                )}
            </div>
        </div>
    );
};
