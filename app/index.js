const React = require('react');
const ReactDOM = require('react-dom');

const HelloWorld = React.createClass({
  render: function() {
    return (
      <div> Hello World </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
