import React from 'react';
import './App.css';
import POKEMON from './assets/pokemon.json';
import { ControlPanel } from './components/ControlPanel';
import { PokemonViewer } from './components/PokemonViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';

function App(): JSX.Element {
  return (
    <Container className = "App">
      <Row>
      <ControlPanel></ControlPanel>
      <PokemonViewer></PokemonViewer>
      </Row>
    </Container>
  );
}

export default App;
