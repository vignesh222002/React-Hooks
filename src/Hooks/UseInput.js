import { useState } from "react";

export default function UseInput(initialValue) {
    let [val, setVal] = useState(initialValue);

    let reset = () => {
        setVal(initialValue)
    }
    let bind = {
        value : val,
        onChange : (e) => setVal(e.target.value)
    }

    return [val, reset, bind]
}