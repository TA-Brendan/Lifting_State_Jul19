
const Display = (props) => {

    const { pokemon } = props

    return (
        <div className="children">
            <h1 className="headers">Display</h1>
            <div className='flex'>
                {pokemon.map((eachPokemon, idx) => (
                    <p key={idx} className='card'>{eachPokemon}</p>
                ))}

            </div>
        </div>
    )
}

export default Display
