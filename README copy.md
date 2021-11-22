# Typescript linting

> Cause of usage unicorn eslint plugin - eslint@8+ reqired

# Installation

    1) Add SKIP_PREFLIGHT_CHECK=true in your .env files (react-scripts did not support eslint@8+)
    2) Copy all files from this folder into your root repository (except README.md)
    3) Run
        yarn add -D prettier @trivago/prettier-plugin-sort-imports @sanv/eslint-config-unicorn-typescrip @typescript-eslint/eslint-plugin @typescript-eslint/parse eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-import-resolver-babel-module eslint-import-resolver-typescript eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-unicorn
    4) Add "lint:js": "eslint \"src/**/*.{ts,tsx}\"" in your package.json scripts
    5) Run "yarn lint:js --fix" as a test
