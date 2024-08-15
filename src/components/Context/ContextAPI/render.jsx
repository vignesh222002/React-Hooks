import { useContext } from "react"
import { ContextAPI } from "./parent"


export default function RenderComponentOfContextAPI () {
    const { value } = useContext(ContextAPI)

    return (
        <div>
            <h1>Value - {value}</h1>
        </div>
    )
}