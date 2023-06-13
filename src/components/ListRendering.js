import Person from "./Person"

let person = [
    {
        id : 1,
        name : 'Vignesh'
    },
    {
        id : 2,
        name : 'wara'
    },
    {
        id : 3,
        name : 'Perumal'
    }
]

let ListRendering = () => {

    let List = person.map( (person) => <Person key = {person.id} persons = {person}></Person> )

    return (
        <>
            {List}
        </>
    )
}
export default ListRendering