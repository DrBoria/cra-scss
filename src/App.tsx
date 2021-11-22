import Header from 'sections/Header';
import Intro from 'sections/Intro';

import ThemeProvider from 'styles/themes/ThemeProvider';

const menuFields = [
  {
    id:    '1',
    title: 'title',
    url:   'url',
  },
  {
    id:    '2',
    title: 'title',
    url:   'url',
  },
  {
    id:    '3',
    title: 'title',
    url:   'url',
  },
  {
    id:    '4',
    title: 'title',
    url:   'url',
  },
];

function App() {
  return (
    <ThemeProvider theme='dark'>
      <div className='App'>
        <Header menu={menuFields} />
        <Intro />
      </div>
    </ThemeProvider>
  );
}

export default App;
