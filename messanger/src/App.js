import React, { Component } from 'react';
import LogInPage from './components/LogInPage';
// import chat page ?

export default class App extends Component {

  state = {
    isLoggedIn: false,
    messageHistory: [],
    onlineUsers: [],
    thisUser: ''
  }

  render() {

    const { isLoggedIn, onlineUsers, messageHistory, thisUser } = this.state;

    return (
      <main>
      {isLoggedIn ? <ChatPage messages={messageHistory} onlineUsers={onlineUsers} thisUser={thisUser} />
      : <LogInPage users={onlineUsers} success={this.logIn} />
      }
      </main>
    )
  }

  logIn = (username) => {
    this.setState({isLoggedIn: true, thisUser: username})
    // connect to socket, new log in event?
  }
}

