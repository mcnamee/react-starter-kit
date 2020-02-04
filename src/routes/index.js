import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomRoute from './Route';
// import PrivateRoute from './PrivateRoute';

// Containers
import {
  ArticlesList,
  ArticlesSingle,
  ArticlesForm,
} from '../containers';

// Components
import About from '../components/About';
import Error from '../components/UI/Error';

/**
 * All of the routes
 */
const Index = () => (
  <Switch>
    <Route path="/" exact component={About} />

    {/* Articles */}
    <CustomRoute path="/articles/:page?" component={ArticlesList} />
    <CustomRoute path="/article/:id" component={ArticlesSingle} />
    <CustomRoute path="/example-form" component={ArticlesForm} />

    {/* 404 */}
    <Route
      render={(props) => (
        <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
      )}
    />
  </Switch>
);

export default Index;
