import { useState } from "react"

export default function UseCounter(initialValue = 0, value) {
    let [count, setCount] = useState(initialValue)

    let increment = () => {
        setCount( prev => prev + value )
    }
    let decrement = () => {
        setCount( prev => prev - value )
    }
    let reset = () => {
        setCount(initialValue)
    }

    return [count, increment, decrement, reset]
}