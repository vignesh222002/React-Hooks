import PropTypes from "prop-types"

let Proptypes = (props) => {

    return (
        <>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <h3>{props.email}</h3>
            <h3>children</h3>
            <ol>
                {props.children.map((child, index) => <li key={index}>{child}</li>)}
            </ol>
        </>
    )
}

Proptypes.propTypes ={
    name : PropTypes.string,
    age : PropTypes.number,
    email : PropTypes.string,
    children : PropTypes.array
}

export default Proptypes