import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ReadArticle from './ReadArticle';
import SignUp from './SignUp';
import SignIn from './SignIn';
import CreateArticle from './CreateArticle';
export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug" component={ReadArticle} />
      <Route path="/sign_up" component={SignUp} />
      <Route path="/sign_in" component={SignIn} />
    </Switch>
  </Router>
);
