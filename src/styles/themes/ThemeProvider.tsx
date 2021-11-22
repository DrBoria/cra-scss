import { FC } from 'react';

import styles from './index.module.scss';

type TThemeProviderProps = {
  theme?: 'light' | 'dark';
};
const ThemeProvider: FC<TThemeProviderProps> = ({ theme = 'light', children }) => (
  <div className={styles[theme]}>{children}</div>
);
export default ThemeProvider;
