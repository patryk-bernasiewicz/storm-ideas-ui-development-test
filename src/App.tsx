import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import GlobalStyle from 'components/StyleProvider/StyleProvider';
import Layout from 'components/Layout/Layout';
import { defaultTheme } from 'utils/theme';
import { NAVIGATION_CONFIG } from 'constants/navigationItems';
import Stories from 'pages/Stories/Stories';

function App() {
  return (
    <GlobalStyle theme={defaultTheme}>
      <Router>
        <Layout navigationConfig={NAVIGATION_CONFIG}>
          <Switch>
            <Route path="/stories" component={Stories} />
            <Route path="/" exact>
              <Redirect to="/stories" />
            </Route>
            <Route path="/*">Not implemented yet!</Route>
          </Switch>
        </Layout>
      </Router>
    </GlobalStyle>
  );
}

export default App;
