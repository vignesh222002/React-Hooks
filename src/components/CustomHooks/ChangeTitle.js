import { useState } from "react";
import UseChangeTitle from "../../Hooks/UseChangeTitle";

export default function ChangeTitle() {
    let [count, setCount] = useState(0)
    UseChangeTitle(count)

    return (
        <>
            <button onClick = {() => setCount(count + 1)}>Count - {count}</button>
        </>
    )
}