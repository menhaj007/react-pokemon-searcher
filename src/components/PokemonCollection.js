import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props.getPokemons)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.filteredPokes.length> 0 ? this.props.filteredPokes.map(poke => <PokemonCard key={poke.id} pokeData={poke} />):this.props.getPokemons.map(poke => <PokemonCard key={poke.id} pokeData={poke} />)}
        
      </Card.Group>
    )
  }
}

export default PokemonCollection
