/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import mysql from 'mysql';

import HomePage from 'containers/HomePage/Loadable';
import CartPage from 'containers/CartPage/Loadable';
import FaqPage from 'containers/FaqPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import config from '../../localConfig/index.ts';
import GlobalStyle from '../../global-styles';

// const Connection = mysql.createConnection(config.mysql);

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Cart" component={CartPage} />
        <Route exact path="/FAQ" component={FaqPage} />
        <Route exact path="/Login" component={LoginPage} />
        <Route exact path="/Search" component={SearchPage} />
        <Route component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </div>
  );
}
