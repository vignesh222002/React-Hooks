import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1>Hi {this.props.name} and {this.props.surName}</h1>
    }
}

export default Welcome