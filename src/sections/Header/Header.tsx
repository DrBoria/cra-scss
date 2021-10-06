import React, { FC } from 'react';

import Button from 'components/Button';

import { TMenu } from 'api/types';

import styles from './Header.module.scss';

export type THeaderProps = {
  menu: TMenu[];
};

const Header: FC<THeaderProps> = ({ menu }) => (
  <div data-theme="dark" className={styles.header}>
    {menu.map((field, index) => (
      <a href={field.url} key={index}>
        <Button type="menu">{field.title}</Button>
      </a>
    ))}
  </div>
);

export default Header;
