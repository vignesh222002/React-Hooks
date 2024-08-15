import { useContext } from "react"
import { ContextAPI } from "./parent"


export default function InputComponentOfContextAPI () {
    const { value, updateValue } = useContext(ContextAPI)

    return (
        <div>
            <input type="text" value={value} onChange={(e) => updateValue(e.target.value)} />
        </div>
    )
}