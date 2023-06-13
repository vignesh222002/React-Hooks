import { useCallback, useState } from "react";
import Count from "./Count";
import Button from "./Button";
import Head from "./Head";

function Parent() {
    let [age, setAge] = useState(20)
    let [salary, setSalary] = useState(500)

    let IncrementAge = useCallback ( () => {
        setAge(age + 1)
    }, [age])
    let IncrementSalary = useCallback ( () => {
        setSalary(salary + 100)
    }, [salary])

    return (
        <>
            <Head />
            <Count text="Age" count={age} />
            <Button changeHandle={IncrementAge}> Increment Age </Button>
            <Count text="Salary" count={salary} />
            <Button changeHandle={IncrementSalary}> Increment Salary </Button>
        </>
    )
}
export default Parent
