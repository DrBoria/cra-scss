import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Containers.module.scss';

type IContainersProps = {
  className?: string;
  style?: any;
};

type ISectionProps = {
  noHeightLimit?: boolean;
  type?: 'light' | 'dark' | 'purple';
} & IContainersProps;

type IHeadingProps = {
  withOffset?: boolean;
} & IContainersProps;

/**
 * @visibleName Containers
 */

export const PageContainer: FC<IContainersProps> = ({ className = '', style, children }) => (
  <div className={`${className} ${styles.pageContainer}`} style={style}>
    {children}
  </div>
);

export const BasicSection: FC<ISectionProps> = ({
  className = '',
  style,
  noHeightLimit,
  type = 'light',
  children,
  ...props
}) => {
  return (
    <div
      data-theme={type}
      className={classNames(className, styles.basicSection, {
        [styles.noHeightLimit]: noHeightLimit,
      })}
      style={{ ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export const HeadingContainer: FC<IHeadingProps> = ({ className = '', style, withOffset, children }) => (
  <div
    className={classNames(className, styles.headingContainer, {
      [styles.withOffset]: withOffset,
    })}
    style={style}
  >
    {children}
  </div>
);
