import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }
  getInitialState = () => ({name: "", hp: "", front: "", back: ""});
  handleChange = (e, {name, value}) => this.setState({[name]:value})
  
  handleSubmit = e => {
    e.preventDefault()
    const { name, hp, front, back } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [ {name: 'hp', value: hp} ],
        sprites: { front: front, back: back
        }
      })
    })
      .then(resp => resp.json())
      .then(pokemon => this.props.addPokemon(pokemon))
      .catch(error => console.error(error))
    this.setState(this.getInitialState())
  }


    
  render() {
    const {name, hp, front, back} = this.state;
    const {handleChange, handleSubmit} = this;
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => {handleSubmit}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={front} onChange={handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={back} onChange={handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
