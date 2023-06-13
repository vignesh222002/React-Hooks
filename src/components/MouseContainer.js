import { useState } from "react"
import HookMouse from "./HookMouse"

let MouseContainer = () => {
    let [display, setDisplay] = useState(true)

    return (
        <>
            <button onClick={ () => setDisplay(!display)}>Toggle Button</button>
            {display && <HookMouse />}
        </>
    )
}
export default MouseContainer