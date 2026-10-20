/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
    rules: {
        // camelCase в именах классов для CSS-модулей: styles.inputContainer
        'selector-class-pattern': ['^[a-z][a-zA-Z0-9]+$', { message: 'Имя класса должно быть в camelCase' }],

        // Разрешаем :global и :local из CSS-модулей
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'local'] }],

        // Разрешаем свойство composes из CSS-модулей
        'property-no-unknown': [true, { ignoreProperties: ['composes'] }],

        // Разрешаем пустые строки между группами переменных в :root
        'custom-property-empty-line-before': null,

        //Сокращаем hex-цвета в проекте там, где возможно
        'color-hex-length': 'short',

        // Имена шрифтов — proper nouns, оставляем как есть (Arial, Roboto)
        'value-keyword-case': ['lower', { ignoreKeywords: ['Arial', 'BlinkMacSystemFont'] }],
    },
};
