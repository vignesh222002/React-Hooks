import { useEffect, useState } from "react"

let HookMouse = () => {
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

    let mousePosition = (e) => {
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect( () => {
        console.log('Effect rendered');
        window.addEventListener('mousemove', mousePosition)

        return () => {
            console.log('Component Unmount');
            window.removeEventListener('mousemove', mousePosition)
        }
    }, [])

    return (
        <>
            Hooks X - {x} and Y - {y}
        </>
    )
}
export default HookMouse