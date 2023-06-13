import { useEffect, useState } from "react";

// let UseEffect = () => {
//     let [count, setCount] = useState(0)

//     let increment = () => {
//         setCount( (prevCount) => prevCount + 1 )
//     }

//     useEffect( () => {
//         let interval = setTimeout(increment, 1000)
//         return () => clearInterval(interval)
//     }, [])

//     return (
//         <>Count = {count}</>
//     )
// }

let UseEffect = () => {
    let [count, setCount] = useState(0)
    let [name, setName] = useState('')
    useEffect (() => {
        console.log("react rendered");
        document.title = `Click ${count}`
    }, [count])

    return (
        <>
            <input type= "text" value={name} onChange={ (e)=> setName(e.target.value) } />
            <button onClick={() => setCount(count + 1)}> Click {count} </button>
            <h2> Name is {name}</h2>
        </>
    )
}
export default UseEffect

// let StateArray = () => {
//     let [items, setItem] = useState([])
//     let [temp, setTemp] = useState(0)

//     let addItem = (item) => {
//         setItem ([...items, {
//             id : items.length,
//             value : item
//         }])
//         console.log("Item-Add" + item);
//     }
//     return (
//         <>
//         <form type="submit" onSubmit={ () => addItem(temp) } >
//             <input 
//             type= "number"
//             onChange = {e => setTemp(e.target.value) }
//             />
//             <button>Submit</button>
//         </form>
//         <ul>
//             {items.map( (item)=> {
//                 <li key={item.id}> {item.value} </li>
//             })}
//         </ul>
//         </>
//     )
// }
// export default StateArray

// let StateObj = () => {
//     const [name, setName] = useState({firstName : '', lastName : ''})
//     return (
//         <form>
//             <input 
//             type = "text"
//             value = {name.firstName}
//             onChange = {e => setName( {...name, firstName: e.target.value} )}
//             />
//             <input 
//             type="text"
//             value={name.lastName}
//             onChange = {e => setName( {...name, lastName: e.target.value} )}
//             />
//             <h2>FirstName is : {name.firstName}</h2>
//             <h2>LastName is : {name.lastName}</h2>
//         </form>
//     )
// }
// export default StateObj

// let SetState = () => {
//     let initial = 0;
//     let [count, setCount] = useState(initial)
//     return (
//         <>
//             count : {count}
//             <button onClick={ ()=> setCount(count + 1 )} > Increment </button>
//             <button onClick={ ()=> setCount(count - 1) }>Decrement</button>
//             <button onClick={ ()=> setCount(initial)} >Reset</button>
//             <button onClick={ ()=> setCount( prev => prev + 5 ) }>Increment 5</button>
//         </>
//     )    
// }
// export default SetState

// function UseState() {
//     const [count, setCount] = useState(0)
//     return (
//         <><button onClick={ () => setCount( count + 1 )}>count {count}</button></>
//     )
// }

// export default UseState