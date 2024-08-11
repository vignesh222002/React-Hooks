import { forwardRef, useImperativeHandle, useRef } from "react"


const ForwardRefChild = forwardRef(({}, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            console: () => {
                console.log("Consoled")
            },
            focusInput: () => {
                inputRef.current.focus()
            }
        }
    }, [])

    return (
        <div
            ref={ref} 
            style={{ border: '1px solid red', padding: "20px", margin: '20px' }}
        >
            <h1>Child Ref</h1>
            <input ref={inputRef} type="text" placeholder="text" />
        </div>
    )
})

export default ForwardRefChild;