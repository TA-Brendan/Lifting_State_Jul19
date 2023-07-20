
// !Packages
import { useState } from 'react'

// !Components
import Form from './components/Form'
import Display from './components/Display'
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState(["Charmander", "Squirtle", "Bulbasaur"])

  return (
    <main id='parent-container'>
      <h1 className='headers'>App</h1>

      <div className='flex'>
        {pokemon.map((eachPokemon, idx) => (
          <p key={idx} className='card'>{eachPokemon}</p>
        ))}
      </div>

      <div id='child-container'>
        <Form pokemon={pokemon} setPokemon={setPokemon}/>
        <Display pokemon={pokemon}/>
      </div>
    </main>
  )
}

export default App
