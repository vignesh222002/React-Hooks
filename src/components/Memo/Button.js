import React from "react"

function Button({ changeHandle, children }) {
    console.log(children)
    return (
        <button onClick={changeHandle}>{children}</button>
    )
}
export default React.memo(Button)