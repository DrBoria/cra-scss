### Header:

```jsx
import { PageContainer } from 'components/Containers';
import Header from 'sections/Header';
import ThemeProvider from 'styles/themes/ThemeProvider';

const menuFields = [
  {
    id: '1',
    title: 'title',
    url: 'url',
  },
  {
    id: '2',
    title: 'title',
    url: 'url',
  },
  {
    id: '3',
    title: 'title',
    url: 'url',
  },
  {
    id: '4',
    title: 'title',
    url: 'url',
  },
];

<ThemeProvider theme="dark">
  <PageContainer style={{ height: '50vh', overflow: 'auto', backgroundColor: '#008080' }}>
    <Header menu={menuFields} />
    <div style={{ height: '150vh' }} />
  </PageContainer>
</ThemeProvider>;
```
