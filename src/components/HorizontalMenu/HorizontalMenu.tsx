import React, { FC } from 'react';

import { TMenu } from 'api/types';

import Button from 'components/Button';

type IHorizontalMenuProps = {
  fields: TMenu[];
};

const HorizontalMenu: FC<IHorizontalMenuProps> = ({ fields }) => (
  <>
    {fields.map((field, index) => (
      <a href={field.url} key={index}>
        <Button type="menu">{field.title}</Button>
      </a>
    ))}
  </>
);

export default HorizontalMenu;
