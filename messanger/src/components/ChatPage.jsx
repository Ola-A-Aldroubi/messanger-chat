import React, { Component } from 'react';

class ChatPage extends Component {

    state ={
        newMessage: '',
        messages: [],
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newMessage} onChange={this.handleChange}/>
                    <button>Enter</button>
                </form>
                <ul>
                    {this.state.messages.map((singleMessage, i) =>{
                        return <li key ={i}>{singleMessage}</li>
                    })}
                </ul>
            </div>
        );
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.setState((currentState) => {
            const postedMessage = currentState.newMessage
            return {
                messages: [...currentState.messages, postedMessage], newMessage: ''
            }
        })

    }
    handleChange = (event) => {
        this.setState({newMessage: event.target.value})
    }
}

export default ChatPage;