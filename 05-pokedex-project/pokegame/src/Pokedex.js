import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component {
  
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>
    }
    return(
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map(e => (
          <Pokecard id={e.id} name={e.name} type={e.type} base_experience={e.base_experience} />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;