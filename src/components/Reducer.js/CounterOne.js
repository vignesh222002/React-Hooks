import { useReducer } from "react"

export default function CounterOne() {
    const initialState = 0
    const reducer = (state, action) => {
        switch(action) {
            case 'increment' :
                return state + 1
            case 'decrement' :
                return state - 1
            case 'reset' :
                return initialState
            default :
                return state
        }
    }
    
    let [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    )
}