import { useState } from "react"

const Form = (props) => {

    const { pokemon, setPokemon } = props

    const [pokeName, setPokeName] = useState("")

    const changeHandler = (e) => {
        console.log("Event", e)
        setPokeName(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setPokemon([...pokemon, pokeName])
    }

    return (
        <form className="children" onSubmit={submitHandler}>
            <h1 className="headers">Form</h1>
            <label>Pokemon Name: </label>
            <input type="text" onChange={changeHandler}/>
            <button>Adopt</button>
        </form>
    )
}

export default Form
