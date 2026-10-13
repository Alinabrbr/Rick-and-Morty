type ClassNamesArg = string | undefined | Record<string, boolean>;

export const classNames = (...args: ClassNamesArg[]): string => {
    const result: string[] = [];
    for (const arg of args) {
        if (typeof arg === 'string') {
            result.push(arg);
        }
        if (arg !== null && typeof arg === 'object') {
            for (const key of Object.keys(arg)) {
                if (arg[key]) {
                    result.push(key);
                }
            }
        }
    }
    return result.join(' ');
};
