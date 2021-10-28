### Button:

```jsx
import Button from 'components/Button';
import ThemeProvider from 'styles/themes/ThemeProvider';

<>
  Light Theme
  <div style={{ width: '100%', padding: '10px' }}>
    <Button>Navigation Button</Button>
    <Button type="menu">Menu Button</Button>
  </div>
  Dark theme
  <ThemeProvider theme="dark">
    <div style={{ width: '100%', padding: '10px', backgroundColor: 'black' }}>
      <Button>Navigation Button</Button>
      <Button type="menu">Menu Button</Button>
    </div>
  </ThemeProvider>
</>;
```
