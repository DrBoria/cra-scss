import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type IButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  withOffset?: boolean;
  // TODO: add active button status and replace switcherActive state
  type?: 'default' | 'switcher' | 'switcherActive' | 'confirmation' | 'navigation' | 'menu';
};

const Button: FC<IButtonProps> = ({ type = 'default', className = '', withOffset, children, ...props }) => (
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
