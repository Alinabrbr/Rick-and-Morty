import { type InputHTMLAttributes, type ReactNode } from 'react';

import { IconClose } from '@/assets';
import { customClassNames } from '@/shared/helpers';
import { Button } from '@/shared/ui';

import styles from './CustomTextInput.module.css';

interface CustomTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: 'bordered' | 'underlined';
    iconClearSize?: string;
    textStyle?: string;
    onClear?: () => void;
    className?: string;
    containerClassName?: string;
    icon?: ReactNode;
}

export const CustomTextInput = ({
    variant = 'bordered',
    iconClearSize,
    textStyle,
    value,
    onClear,
    className,
    containerClassName,
    icon,
    ...rest
}: CustomTextInputProps) => {
    return (
        <div className={customClassNames(styles.inputContainer, containerClassName)}>
            {icon && <div className={styles.iconContainer}>{icon}</div>}
            <input
                className={customClassNames(styles.input, styles[variant], textStyle, className)}
                value={value}
                {...rest}
            />
            {value && (
                <Button
                    onClick={onClear}
                    type='button'
                    mode='icon'
                    isHover={false}
                    aria-label='Clear text'
                    className={styles.button}
                    icon={<IconClose width={iconClearSize} height={iconClearSize} />}
                />
            )}
        </div>
    );
};
