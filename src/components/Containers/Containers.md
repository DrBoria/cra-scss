### Containers:

```jsx
import { PageContainer, BasicSection, HeadingContainer } from 'components/Containers';
import { PlainText, SectionTitle } from 'components/Typography';

<PageContainer>
  <BasicSection>
    <SectionTitle>Light example</SectionTitle>
    <PlainText>Page container got offset from top for header</PlainText>
  </BasicSection>

  <BasicSection type="dark">
    <HeadingContainer>
      <SectionTitle withOffset type="light">
        Dark example
      </SectionTitle>
      <PlainText type="light">Basic section + heading container usage</PlainText>
    </HeadingContainer>
  </BasicSection>
</PageContainer>;
```
