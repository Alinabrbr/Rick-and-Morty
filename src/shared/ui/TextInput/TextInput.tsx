import { type InputHTMLAttributes, type ReactNode } from 'react';

import { IconClose } from '@/assets';
import { classNames } from '@/shared/helpers';
import { Button } from '@/shared/ui';

import styles from './TextInput.module.css';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: 'bordered' | 'underlined';
    iconClearSize?: string;
    onClear?: () => void;
    containerClassName?: string;
    icon?: ReactNode;
    label?: string;
}

export const TextInput = ({
    variant = 'bordered',
    iconClearSize,
    value,
    onClear,
    className,
    containerClassName,
    icon,
    label,
    ...rest
}: TextInputProps) => {
    return (
        <div className={classNames(styles.inputContainer, containerClassName)}>
            {label && <label className={classNames(styles.label, 'text_roboto_medium_size-md')}>{label}</label>}
            {icon && <div className={styles.iconContainer}>{icon}</div>}
            <input className={classNames(styles.input, styles[variant], className)} value={value} {...rest} />
            {value && (
                <Button
                    onClick={onClear}
                    type='button'
                    mode='icon'
                    hoverable={false}
                    aria-label='Clear text'
                    className={styles.button}
                    icon={<IconClose width={iconClearSize} height={iconClearSize} />}
                />
            )}
        </div>
    );
};
