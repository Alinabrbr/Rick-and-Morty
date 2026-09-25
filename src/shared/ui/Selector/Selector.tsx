import { type ComponentType, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { IconDropDown } from '@/assets';

import styles from './Selector.module.css';

interface Option<T> {
    label: string;
    value: T;
}

interface DefaultOptionComponentProps<T> {
    option: Option<T>;
}

interface SelectorProps<T> {
    options: Option<T>[];
    value: T;
    onChange: (value: T) => void;
    OptionComponent?: ComponentType<DefaultOptionComponentProps<T>>;
    placeholder?: string;
    size?: 'small' | 'large';
}

const DefaultOptionComponent = <T,>({ option }: DefaultOptionComponentProps<T>) => {
    return <span>{option.label}</span>;
};

export const Selector = <T,>({
    options,
    placeholder,
    value,
    size = 'large',
    onChange,
    OptionComponent = DefaultOptionComponent,
}: SelectorProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
    const selectedOption = options.find((option) => option.value === value);

    const handleSelectClick = () => setIsOpen((prev) => !prev);

    const handleOptionClick = (newValue: T) => {
        setIsOpen(false);
        setFocusedIndex(-1);
        triggerRef.current?.focus();
        if (newValue === value) return;
        onChange(newValue);
    };

    const handleSelectorKeyDown = (event: React.KeyboardEvent) => {
        event.preventDefault();
        if (event.key === 'Enter' || event.key === ' ') {
            if (!isOpen) {
                setIsOpen(true);
                const selectedIndex = options.findIndex((o) => o.value === value);
                setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0);
            } else {
                setIsOpen(false);
                setFocusedIndex(-1);
            }
        }
        if (event.key === 'Escape') {
            setIsOpen(false);
            setFocusedIndex(-1);
        }
        if (event.key === 'ArrowDown') {
            if (!isOpen) {
                setIsOpen(true);
                setFocusedIndex(0);
            } else {
                setFocusedIndex((prev) => Math.min(prev + 1, options.length - 1));
            }
        }
        if (event.key === 'ArrowUp') {
            if (isOpen) {
                setFocusedIndex((prev) => Math.max(prev - 1, 0));
            }
        }
    };

    const handleOptionKeyDown = (event: React.KeyboardEvent, optionValue: T) => {
        event.preventDefault();
        if (event.key === 'Enter' || event.key === ' ') {
            handleOptionClick(optionValue);
        }
        if (event.key === 'Escape') {
            setIsOpen(false);
            setFocusedIndex(-1);
            triggerRef.current?.focus();
        }
        if (event.key === 'ArrowDown') {
            setFocusedIndex((prev) => Math.min(prev + 1, options.length - 1));
        }
        if (event.key === 'ArrowUp') {
            setFocusedIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    useEffect(() => {
        if (focusedIndex >= 0) {
            optionRefs.current[focusedIndex]?.focus();
        }
    }, [focusedIndex]);

    useEffect(() => {
        if (!isOpen) return;
        const handleOutsideClick = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOpen]);

    return (
        <div className={clsx(styles.wrapper, styles[size])} ref={wrapperRef}>
            <div
                className={styles.selector}
                role='combobox'
                aria-expanded={isOpen}
                aria-haspopup='listbox'
                tabIndex={0}
                ref={triggerRef}
                onClick={handleSelectClick}
                onKeyDown={handleSelectorKeyDown}
            >
                <>
                    {selectedOption?.label ? <OptionComponent option={selectedOption} /> : placeholder}
                    <IconDropDown className={styles.arrow} data-open={isOpen} data-size={size} aria-hidden='true' />
                </>
            </div>
            {isOpen && (
                <ul className={styles.dropdown} role='listbox'>
                    {options.map((option, index) => (
                        <li
                            key={String(option.value)}
                            ref={(el) => {
                                optionRefs.current[index] = el;
                            }}
                            className={styles.option}
                            role='option'
                            aria-selected={option.value === value}
                            tabIndex={-1}
                            onClick={() => handleOptionClick(option.value)}
                            onKeyDown={(e) => handleOptionKeyDown(e, option.value)}
                        >
                            <OptionComponent option={option} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
