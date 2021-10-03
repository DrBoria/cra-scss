### Typography:

```jsx
import { PageTitle, Highlighted, SubTitle, SectionTitle, PlainText, Label } from './Typography';

<div>
  <div style={{ width: '100%' }}>
    <div style={{ backgroundColor: '#000' }}>
      <PageTitle>
        Page Title
        <Highlighted> Page Title Highlighted </Highlighted>
        Page Title
      </PageTitle>
    </div>
    <br />
    <div style={{ backgroundColor: '#000' }}>
      <SectionTitle type="light">Section Title</SectionTitle>
    </div>
    <br />
    <SectionTitle>Section Title</SectionTitle>
    <br />
    <SubTitle>Sub Title </SubTitle>
    <br />
    <div style={{ backgroundColor: '#000' }}>
      <SubTitle type="light">Sub Title </SubTitle>
    </div>
    <br />
    <SubTitle>
      Sub Title <Highlighted> Sub Title Highlighted </Highlighted>
    </SubTitle>
    <br />
    <PlainText>Plain Text</PlainText>
    <br />
    <div style={{ backgroundColor: '#000' }}>
      <PlainText type="light">Plain Text</PlainText>
    </div>
    <br />
    <Label>Label Text</Label>
  </div>

  <div data-theme="dark" style={{ width: '100%' }}>
    <div style={{ backgroundColor: '#000' }}>
      <PageTitle>
        Page Title
        <Highlighted> Page Title Highlighted </Highlighted>
        Page Title
      </PageTitle>
    </div>
    <br />
    <div style={{ backgroundColor: '#000' }}>
      <SectionTitle type="light">Section Title</SectionTitle>
    </div>
    <br />
    <SectionTitle>Section Title</SectionTitle>
    <br />
    <SubTitle>Sub Title </SubTitle>
    <br />
    <div style={{ backgroundColor: '#000' }}>
      <SubTitle type="light">Sub Title </SubTitle>
    </div>
    <br />
    <SubTitle>
      Sub Title <Highlighted> Sub Title Highlighted </Highlighted>
    </SubTitle>
    <br />
    <PlainText>Plain Text</PlainText>
    <br />
    <div style={{ backgroundColor: '#000' }}>
      <PlainText type="light">Plain Text</PlainText>
    </div>
    <br />
    <Label>Label Text</Label>
  </div>
</div>;
```
