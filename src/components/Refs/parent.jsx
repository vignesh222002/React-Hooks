import { useRef } from "react"
import ForwardRefChild from "./child"


export default function ForwardRefParent () {

    const parentRef = useRef()

    return (
        <div>
            <h1>Parent Ref</h1>
            <button onClick={() => parentRef.current.console()}>Console</button>
            <br />
            <button onClick={() => parentRef.current.focusInput()}>Focus</button>
            <ForwardRefChild ref={parentRef} />
        </div>
    )
}