const { Component } = require("react");

let names = ['Vignesh', 'Wara', 'Perumal'];

class IndexedKey extends Component {
    render() {
        let NameList = names.map( (name, index) => <h2 key = {index}> {index} {name} </h2>)
        return <> {NameList} </>
    }
}

export default IndexedKey