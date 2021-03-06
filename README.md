# React Toolkit Template with SCSS

> App based on typescript, react and SCSS (https://sass-lang.com/guide)

## INSTALLATION and START

    git clone https://github.com/DrBoria/cra-scss.git
    cd ./cra-scss
    yarn
    yarn start

## FOLDERS DESCRIPTION

    public/              public files for build
    src/                 code of all application
       /api              predefined list of queries to BE
       /components       moleculas in atomic design. Reusable components (like buttons, inputs etc.). Should have only ui logic, not business logic (dumb components).
       /sections         organisms in atomic design. Could contain business logic, but main purpose is combining components
       /styles           styles, themes, theme provider and so on
       /utils            functions helpers (fetch, get headers and so on)
       index.tsx         app entry point
       index.css         basic styles of application (html, body)

## HOW TO WRITE CODE

Please use following style/princeples:

    1) Use only dumb components (without business logic) in components folder
    2) Components should know how do they look like, not sections that contains it
       It means - instead of redefining styles on every page - just make new type of button/input inside button/input component and just pass this type on your page
    3) Make sections and pages small and readable as it possible (no need to make more than 40 lines of jsx inside page)

    ** styles **
    5) scss variables should be used just for sematic highlighting value maning
    6) css-variables declared globaly in /styles/globals.scss preferable to use in app
    7) themes declared in /styles/themes
    7.1) If you'd like to apply specific theme just wrap your component in <ThemeProvider theme="YOUR_THEME"> WRAPPED_COMPONENT </ThemeProvider>
    7.2) ThemeProvider resides in /styles/themes/ThemeProvider.tsx
