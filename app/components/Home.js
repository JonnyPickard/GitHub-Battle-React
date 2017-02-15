const React = require('react');
const {transparentBG} = require('../styles/index');
const {Link} = require('react-router');

const Home = React.createClass({
  render: function() {
    return(
      <div className='jumbotron col-sm-12 text-center'
        style={transparentBG}>
        <h1>GitHub Battle</h1>
        <p className='lead'>Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success' >
            Get Started
          </button>
        </Link>
      </div>
    );
  }
});

module.exports = Home;
