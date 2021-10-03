import React, { FC } from 'react';

import HorizontalMenu from 'components/HorizontalMenu';

import { TMenu } from 'api/types';

import styles from './Header.module.scss';

export type THeaderProps = {
  menu: TMenu[];
};

const Header: FC<THeaderProps> = ({ menu }) => (
  <div data-theme="dark" className={styles.header}>
    <HorizontalMenu fields={menu} />
  </div>
);

export default Header;
