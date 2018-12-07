import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../components/Templates/Nothing';
import TemplateSidebar from '../components/Templates/Sidebar';

// Routes
import Home from '../components/Generic/Home';
import Error from '../components/Generic/Error';

import SignUp from '../containers/SignUp';
import Login from '../containers/Login';

import PostsContainer from '../containers/Posts';
import PostListingComponent from '../components/Posts/Listing';
import PostViewComponent from '../components/Posts/View';

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Home {...props} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/sign-up"
      render={props => (
        <TemplateNothing>
          <SignUp {...props} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateNothing>
          <Login {...props} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/posts"
      render={props => (
        <TemplateSidebar>
          <PostsContainer {...props} Layout={PostListingComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/post/:id"
      render={props => (
        <TemplateSidebar>
          <PostsContainer {...props} Layout={PostViewComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      render={props => (
        <TemplateSidebar>
          <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);
