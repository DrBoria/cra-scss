### Containers:

```jsx
import { PageContainer, BasicSection, HeadingContainer } from 'components/Containers';
import { PlainText, SectionTitle } from 'components/Typography';
import ThemeProvider from 'styles/themes/ThemeProvider';

<PageContainer>
  <BasicSection>
    <SectionTitle>Light theme</SectionTitle>
    <PlainText>Page container got offset from top for header</PlainText>
  </BasicSection>

  <ThemeProvider theme="dark">
    <BasicSection>
      <HeadingContainer>
        <SectionTitle withOffset>Dark theme</SectionTitle>
        <PlainText>Basic section + heading container usage</PlainText>
      </HeadingContainer>
    </BasicSection>
  </ThemeProvider>
</PageContainer>;
```
