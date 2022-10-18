import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState()
  useEffect(() => {
    const URL='https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
   axios.get(URL)
   .then(res => setPokemons(res.data.results))
   .catch(err => console.log(err))
  }, [])
  

  const userName = useSelector(state => state.userName)
  return (
    <div>
      <header>
        <h1>Pokedex</h1>
        <p>Welcome<span>{userName}</span>, here you can find your favorite pokemon</p>
      </header>
      <aside>
        <InputSearch />
        <SelectByType />
      </aside>
      <main>
        <div className='card-container'>
          {
            pokemons?.map(pokemon => (
                <CardPoke
                   key={pokemon.url}
                   url={pokemon.url}
                />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Pokedex