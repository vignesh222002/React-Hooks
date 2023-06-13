import { useMemo, useState } from "react";

function UseMemo() {
    let [countOne, setCountOne] = useState(0)
    let [countTwo, setCountTwo] = useState(0)

    let IncrementOne = () => {
        setCountOne( countOne + 1 )
    }
    let IncrementTwo = () => {
        setCountTwo( countTwo + 1 )
    }
    let IsEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne])


    return (
        <>
            <button onClick={IncrementOne}>Incremen - {countOne}</button>
            <span>{IsEven ? 'Even' : 'Odd'}</span>
            <button onClick={IncrementTwo}>Increment - {countTwo}</button>
        </>
    )
}
export default UseMemo