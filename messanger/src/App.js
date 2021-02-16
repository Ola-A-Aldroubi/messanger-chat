import React, { Component } from "react";
// import "App.css";
import LogInPage from "./components/LogInPage";
import ChatPage from "./components/ChatPage";
import { Router } from "@reach/router";
// import chat page ?

export default class App extends Component {
  state = {
    isLoggedIn: false,
    messageHistory: [],
    onlineUsers: [
      {
        username: "kieran",
        avatar:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      },
    ],
    thisUser: "",
  };

  render() {
    const { isLoggedIn, onlineUsers, messageHistory, thisUser } = this.state;

    return (
      <main>
        {isLoggedIn ? (
          <ChatPage
            messages={messageHistory}
            onlineUsers={onlineUsers}
            thisUser={thisUser}
          />
        ) : (
          <Router>
            <LogInPage path="/" users={onlineUsers} success={this.logIn} />
            <ChatPage path="/chatroom" />
          </Router>
        )}
      </main>
    );
  }

  logIn = (username) => {
    this.setState({ isLoggedIn: true, thisUser: username });
    // connect to socket, new log in event?
  };
}
