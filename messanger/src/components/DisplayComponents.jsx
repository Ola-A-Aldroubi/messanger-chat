import React from 'react'

export default class DisplayComponents extends React.Component {
    state = {
        users : [{username: "dummy", avatar: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"}]
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState((currentState) => {
                return { users: [...currentState.users, this.props] }
            })
        }
    }

    render() {
        return (
        <div id="display-online-stat">
            <h4>Online </h4>
           {this.state.users.map((user) => {
               return <div className="userCard"><p>{user.username}</p> <img class="avatar" src={user.avatar}></img></div>
           })}
        </div>
        )
    }
}
