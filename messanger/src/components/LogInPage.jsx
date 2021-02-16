import React, { Component } from 'react'

export default class LogInPage extends Component {

  state = {
    username: '',
    avatar: '',
    isUserError: false,
    isAvatarError: false
  }

  render() {

    const { isUserError, isAvatarError } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username: 
          <input type="text" onChange={this.handleChange} id="username" />
        </label>
        <label>
          Avatar URL:
          <input type="text" onChange={this.handleChange} id="avatar"/>
        </label>
        <button>Log in</button>
        {isUserError && <p>Username already taken, try another</p>}
        {isAvatarError && <p>png or jpg files only</p>}
      </form>
    )
  }

  handleChange = ({ target: { value, id }}) => {
    this.setState({ [id]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, avatar, users } = this.state;
    // users will come from props?

    const avatarRegex = /jpg$|png$/i;
    const index = users.findIndex(user => user.username === username);

    if (index > -1 || username.length === 0) {
      this.setState({isUserError: true, isAvatarError: false})
    } else if (!avatarRegex.test(avatar)) {
      this.setState({isAvatarError: true, isUserError: false})
    } else {
      console.log('success, user logged in: ', username)
      // call function from props to log user in  - this.props.logIn({username, avatar})
    }
  }
}