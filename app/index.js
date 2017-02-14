const React = require('react');
const ReactDOM = require('react-dom');

const USER_DATA = {
  name: 'Jonny',
  username: 'JonnyP',
  avatarURL: 'https://avatars0.githubusercontent.com/u/16156445?v=3&s=460'
};

const ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageURL} style={{height: 100, width: 100}}/>;
  }
});

const ProfileLink = React.createClass({
  render: function() {
    return(
      <div>
        <a href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

const ProfileName = React.createClass({
  render: function() {
    return(
      <div>
        <strong>
          {this.props.name}
        </strong>
      </div>
    );
  }
});

const Avatar = React.createClass({
  render: function() {
    return(
      <div>
        <ProfilePic imageURL={this.props.user.avatarURL}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);
