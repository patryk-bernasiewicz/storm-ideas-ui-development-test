import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from 'components/StyleProvider/StyleProvider';
import Layout from 'components/Layout/Layout';
import { defaultTheme } from 'utils/theme';
import { NAVIGATION_CONFIG } from 'constants/navigationItems';

function App() {
  return (
    <GlobalStyle theme={defaultTheme}>
      <Router>
        <Layout navigationConfig={NAVIGATION_CONFIG}>
          <Switch>
            <Route path="/">Global path</Route>
          </Switch>
        </Layout>
      </Router>
    </GlobalStyle>
  );
}

export default App;
