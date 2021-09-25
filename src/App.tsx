import React from 'react';

import GlobalStyle from 'components/StyleProvider/StyleProvider';
import Layout from 'components/Layout/Layout';
import { defaultTheme } from 'utils/theme';

function App() {
  return (
    <div className="App">
      <GlobalStyle theme={defaultTheme}>
        <Layout>This is content</Layout>
      </GlobalStyle>
    </div>
  );
}

export default App;
