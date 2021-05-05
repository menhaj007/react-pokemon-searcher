import React from 'react'
import PokemonCard from "./PokemonCard"

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => props.changeSearchText(e.target.value)} className="prompt"/>
        <i className="search icon" />
        
      </div>
    </div>
  )
}

export default Search
