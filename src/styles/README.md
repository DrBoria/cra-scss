# Styles

> Here lies global definition for styles in application
> All global/reusable styles should be placed in this folder.

# global.scss

        Inside global.scss added css-variables for providing more readability in media queries
        This is easy way to update basic variables like offsets when media queries applied
        Following this style you do not need to write media query in every component where you use offset. Just list differences between mobile, tablet and desktop offsets in global.scss and use css-variable in application

```diff
- Not
```

```scss
  @media (min-width: #{$screen-mobile-width}) {
    padding: $offsets-section-mobile;
  }
  @media (min-width: #{$screen-tablet-width}) {
    padding: $offsets-section-tablet;
  }
  @media (min-width: #{$screen-desktop-width}) {
    padding: $offsets-section-desktop;
  }
`;
```

```diff
+ But
```

```jsx
  padding: var(--offset-section);
```

# Color Themes

        If you need more color themes add it to /styles/themes and provide using /styles/ThemeProvider as wrapper. Works practically the same as ThemeProvider in styled-components.
        1st, you need to add new theme file in /styles/themes/YOUR_THEME.scss\
        2nd, add just exact the same css-variables in this file with your values
        3rd, import it in /styles/themes/index.module.scss
        4th, wrap your component(s) with <ThemeProvider theme="YOUR_THEME"> WRAPPED_COMPONENT </ThemeProvider>

```jsx
import ThemeProvider from 'styles/themes/ThemeProvider';

<ThemeProvider theme="YOUR_THEME">
  <WRAPPED_COMPONENT />
</ThemeProvider>;
```
