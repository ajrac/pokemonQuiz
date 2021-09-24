import React, { useState } from 'react';
import './App.css';
import POKEMON from './assets/pokemon.json';
import { ControlPanel } from './components/ControlPanel';
import { PokemonViewer } from './components/PokemonViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import { Pokemon } from './interfaces/pokemon';

function App(): JSX.Element {
  const [activePokemon, setActivePokemon] = useState<Pokemon>(POKEMON[0]);
  return (
    <Container className = "App">
      <Row>
      <ControlPanel setPokemon={setActivePokemon}></ControlPanel>
      <PokemonViewer pokemon={activePokemon}></PokemonViewer>
      </Row>
    </Container>
  );
}

export default App;
