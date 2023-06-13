import UseInput from "../../Hooks/UseInput"

export default function ChangeInputForm() {
    let [firstName, firstNameReset, firstNameBind] = UseInput('')
    let [lastName, lastNameReset, lastNameBind] = UseInput('')

    let submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        firstNameReset()
        lastNameReset()
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input
                    {...firstNameBind}
                    type = "text"
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                    {...lastNameBind}
                    type = "text"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}