import { FC } from 'react';

import 'styles/globals.scss';
import ThemeProvider from 'styles/themes/ThemeProvider';

const StylesProvider: FC<any> = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
export default StylesProvider;
