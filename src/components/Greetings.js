import { Component } from "react";

class Greetings extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            isLoggedIn : false
        }
    }

    render() {
        return (this.state.isLoggedIn) ?
        ( <>Welcome Vignesh</> ) :
        (<></>)

        // let message
        // if (this.state.isLoggedIn) { message = <>Welcome Vignesh</> }
        // else { message = <>Welcome Guest</> }
        // return ( <>{message}</> )

        // if (this.state.isLoggedIn) { return <>Welcome Vignesh</> }
        // else { return <>Welcome Guest</> }
    }
}
export default Greetings