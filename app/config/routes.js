const ReactRouter = require('react-router');
const React = require('react');
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;

const Main = require('../components/Main');
const Home = require('../components/Home');

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
