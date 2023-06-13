import React from "react";

function Head() {
    console.log('Head Rendered');
    return (
        <h1>Title Head</h1>
    )
}
export default React.memo(Head)