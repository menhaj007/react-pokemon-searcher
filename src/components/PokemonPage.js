import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchText: "",
    foundPokemons: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon/").then(r => r.json()).then(data => {
      this.setState({
        pokemons: data
      })
    })
  }
  changeSearchText = (text) => {
    this.setState({
      searchText: text
    })
    // console.log(text)
  }
  
  render() {
    // console.log(this.state.searchText)
    const filtered = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchText));
    return (
      <Container >
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search changeSearchText={this.changeSearchText}/>
        <br />
        <PokemonCollection getPokemons={this.state.pokemons} filteredPokes={filtered}/>
      </Container>
    )
  }
}

export default PokemonPage
