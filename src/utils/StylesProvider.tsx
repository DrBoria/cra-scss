import React, { FC, Fragment } from 'react';
import ThemeProvider from 'styles/themes/ThemeProvider';
import 'styles/globals.scss';

const StylesProvider: FC<any> = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
export default StylesProvider;
