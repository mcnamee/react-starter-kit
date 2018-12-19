import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Screens
import Error from '../components/Generic/Error';
import Home from '../components/Generic/Home';
import Login from '../containers/Login';
import PostsContainer from '../containers/Posts';
import SignUp from '../containers/SignUp';

export default () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/posts" component={PostsContainer} />
    <Route path="/post/:id" component={PostsContainer} />
    <Route component={Error} />
  </Switch>
);
