import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Typography.module.scss';

type TTypographyProps = {
  className?: string;
  withOffset?: boolean;
  style?: any;
};

/**
 * @visibleName Typography
 */

export const PageTitle: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
  <h1
    className={classNames(className, styles.pageTitle, {
      [styles.withOffset]: withOffset,
    })}
    style={style}
  >
    {children}
  </h1>
);

export const SubTitle: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
  <h2
    className={classNames(className, styles.subTitle, {
      [styles.withOffset]: withOffset,
    })}
    style={style}
  >
    {children}
  </h2>
);

export const SectionTitle: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
  <h3
    className={classNames(className, styles.sectionTitle, {
      [styles.withOffset]: withOffset,
    })}
    style={style}
  >
    {children}
  </h3>
);

export const PlainText: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
  <p
    className={classNames(className, styles.plainText, {
      [styles.withOffset]: withOffset,
    })}
    style={style}
  >
    {children}
  </p>
);

export const Highlighted: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
  <span
    className={classNames(className, styles.highlighted, {
      [styles.withOffset]: withOffset,
    })}
    style={style}
  >
    {children}
  </span>
);

export const Label: FC<TTypographyProps> = ({ className = '', style, withOffset, children }) => (
  <span
    className={classNames(className, styles.label, {
      [styles.withOffset]: withOffset,
    })}
    style={style}
  >
    {children}
  </span>
);
