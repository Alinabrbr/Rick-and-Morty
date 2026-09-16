import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            prettier: eslintPluginPrettier,
            'simple-import-sort': simpleImportSort,
        },
        extends: [
            js.configs.recommended,
            ...tsEslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            prettierConfig,
        ],
        rules: {
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^\\u0000'],
                        ['^react', '^@?\\w'],
                        ['^(@|ui|utils|hooks)(/.*|$)'],
                        ['^\\./(?!.*\\.(css|scss|sass|less|styl)$).*$', '^\\.\\.(?!/?$).*$', '^\\.\\./?$'],
                        ['^.+\\.(css|scss|sass|less|styl|module\\.css)$'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
            'prettier/prettier': 'warn',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    args: 'after-used',
                    ignoreRestSiblings: true,
                },
            ],
            'no-undef': 'off',
            'no-console': 'error',
            semi: ['error', 'always'],
            quotes: [
                'error',
                'single',
                {
                    allowTemplateLiterals: true,
                },
            ],
            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],
            'no-multi-spaces': 'error',
            'template-tag-spacing': 'error',
            'arrow-spacing': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'prefer-destructuring': [
                'warn',
                {
                    array: false,
                    object: true,
                },
            ],
        },
    },
]);
