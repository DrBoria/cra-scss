import React, { FC } from 'react';

import Button from 'components/Button';
import { BasicSection } from 'components/Containers';
import { PageTitle, Highlighted } from 'components/Typography';

import styles from './Intro.module.scss';

const Intro: FC<any> = () => (
  <BasicSection className={styles.intro}>
    <div className={styles.column}>
      <PageTitle className={styles.title}>
        We <Highlighted>design</Highlighted> & <Highlighted>develop</Highlighted> vegetables
      </PageTitle>
      <Button>MAKE ORDER</Button>
    </div>

    {/* Position relative is fix for absolute positioning of image */}
    <div className={styles.column} style={{ position: 'relative' }}>
      <img src='https://images.pexels.com/photos/4406335/pexels-photo-4406335.jpeg' width='400' height='400' alt='' />
    </div>
  </BasicSection>
);

export default Intro;
