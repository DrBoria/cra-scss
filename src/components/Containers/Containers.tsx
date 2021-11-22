import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Containers.module.scss';

type TContainersProps = {
  className?: string;
  style?: any;
};

type TSectionProps = {
  noHeightLimit?: boolean;
} & TContainersProps;

type THeadingProps = {
  withOffset?: boolean;
} & TContainersProps;

/**
 * @visibleName Containers
 */

export const PageContainer: FC<TContainersProps> = ({ className = '', style, children }) => (
  <div className={`${className} ${styles.pageContainer}`} style={style}>
    {children}
  </div>
);

export const BasicSection: FC<TSectionProps> = ({ className = '', style, noHeightLimit, children, ...props }) => {
  return (
    <div
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

export const HeadingContainer: FC<THeadingProps> = ({ className = '', style, withOffset, children }) => (
  <div
    className={classNames(className, styles.headingContainer, {
      [styles.withOffset]: withOffset,
    })}
    style={style}
  >
    {children}
  </div>
);
