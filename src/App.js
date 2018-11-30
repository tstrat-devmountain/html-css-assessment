import React, { Component } from 'react';
import './style.css';
import ListDisplay from './ListDisplay';
import { pokemon } from './model';

import logo from './media/PokemonLogo.png';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>HTML/CSS ASSESSMENT</h1>
        </header>
        <div className="pokemon">
          <img src={logo} alt="pokemon"/>
          <h3>Displaying pokemon from props</h3>
          <ListDisplay list={pokemon}/>
        </div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
