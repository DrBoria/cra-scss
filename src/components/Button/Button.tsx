import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type IButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  withOffset?: boolean;
  /* navigation: moves out of the page, menu: navigate on the page */
  type?: 'navigation' | 'menu';
};

const Button: FC<IButtonProps> = ({ type = 'navigation', className = '', withOffset, children, ...props }) => (
  <button
    className={classNames(className, styles.button, styles[type], {
      [styles.withOffset]: withOffset,
    })}
    {...props}
  >
    {children}
  </button>
);

export default Button;
