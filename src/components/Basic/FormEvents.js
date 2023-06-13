import { useState } from "react"

export default function FormEvents() {
    // console.log('page re rendered')
    let [value, setValue] = useState('react')
    let selectHandler = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
    }
    let submitHandler = (e) => {
        e.preventDefault()
        console.log('Form Submited')
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <select value={value} onChange={selectHandler}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}