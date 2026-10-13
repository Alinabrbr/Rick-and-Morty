type CustomClassNamesArg = string | undefined | Record<string, boolean>;

export const customClassNames = (...args: CustomClassNamesArg[]): string => {
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
