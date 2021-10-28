import React, { FC } from 'react';
import styles from './index.module.scss';

type IThemeProviderProps = {
  theme?: 'light' | 'dark';
};
const ThemeProvider: FC<IThemeProviderProps> = ({ theme = 'light', children }) => (
  <div className={styles[theme]}>{children}</div>
);
export default ThemeProvider;
