import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    active: false
  }
  render() {
    // console.log(this.props.pokeData)
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={() => (this.setState({active: !this.state.active}))} 
            src={this.state.active? this.props.pokeData.sprites.back :this.props.pokeData.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokeData.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeData.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
