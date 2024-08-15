import { createContext, useState } from "react"
import InputComponentOfContextAPI from "./input"
import RenderComponentOfContextAPI from "./render"


export let ContextAPI = createContext()

export default function ParentOfContextAPI () {
    let [state, setState] = useState('')

    return (
        <>
            <ContextAPI.Provider
                value={{
                    value: state,
                    updateValue: (value) => setState(value),
                }}
            >
                <InputComponentOfContextAPI />
                <RenderComponentOfContextAPI />
            </ContextAPI.Provider>
        </>
    )
}