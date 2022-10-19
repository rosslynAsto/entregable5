import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css'

const CardPoke = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
   axios.get(url)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }
  console.log(pokemon);
  return (
   <article className='card-poke' onClick={handleClick}>
      <header className='card-poke__header'>
        <img className='card-poke__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='card-poke__body'>
         <h3 className='card-poke__name'>{pokemon?.name}</h3>
         <ul className='card-poke__types-container'>
          {
            pokemon?.types.map(type => (
              <li className='card-poke__type'>{type.type.name}</li>
            ))
          }
         </ul>
         <p className='card-poke__type-label'>Type</p>         
      </section>
      <ul className='card-poke__stats-container'>
          {
            pokemon?.stats.map(stat => (
              <li key={stat.stat.name} className='card-poke__stat'>
                <span className='card-poke__stat-label'>{stat.stat.name}</span>
                <span className='card-poke__stat-number'>{stat.base_stat}</span>
              </li>
            ))
          }

         </ul>
   </article>
  )
}

export default CardPoke