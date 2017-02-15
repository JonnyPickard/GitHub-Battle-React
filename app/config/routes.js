const ReactRouter = require('react-router');
const React = require('react');
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;

const Main = require('../components/Main');
const Home = require('../components/Home');
const PromptContainer = require('../containers/PromptContainer');

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/playerOne'
        header='Player One'
        component={PromptContainer} />
      <Route path='/playerTwo/:playerOne'
        header='Player Two'
        component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;
