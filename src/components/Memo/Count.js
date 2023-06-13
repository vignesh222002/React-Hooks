import React from "react"

function Count({ text, count }) {
    console.log(`Render ${text}`)
    return (
        <>{text} - {count}</>
    )
}
export default React.memo(Count)