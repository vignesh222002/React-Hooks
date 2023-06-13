import { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message1 : "Welcome Guest"
        }
    }

    changeMessage() {
        this.setState({
            message2 : "Thank You"
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </>
        )
    }
}
export default Message