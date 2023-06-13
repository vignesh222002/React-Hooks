
// const converted = { 
//     name: "Vignesh", 
//     theme: {
//         backgroundColor : "blue",
//         color : "red"
//     }
// }


const Greet = (prop) =>  {
    let {surName, name} = prop
    
    return <h1>Hii {name} and {surName}</h1>
}

export default Greet;