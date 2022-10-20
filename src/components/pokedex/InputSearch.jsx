import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = () => {

const navigate = useNavigate()
const submit = (e) =>{
    e.preventDefault()    
    navigate (`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
}
  return (
    <form onSubmit={submit}>
      <div className='search__div'>
      <input id='search' type="text" placeholder='Search a pokemon' className='input__search' />
      <button className='search__btn'>Search</button>
      </div>
     
    </form>
  )
}

export default InputSearch