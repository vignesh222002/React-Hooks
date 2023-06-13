import UseCounter from "../../Hooks/UseCounter"

export default function ChangeCounter() {
    let [count, increment, decrement, reset] = UseCounter(10, 10)

    return (
        <>
            <div>Count = {count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}