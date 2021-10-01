import {Button, Col} from 'react-bootstrap';
import { Pokemon } from '../interfaces/pokemon';
import POKEMON from '../assets/pokemon.json';
import { useState } from 'react';


function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
}

//function whoseThat({pokemon}: {pokemon: Pokemon}): string {
  //  return pokemon.Name
//}

export function ControlPanel({setPokemon}: {setPokemon: (c: Pokemon)=> void},{pokemon}: {pokemon: Pokemon}): JSX.Element {
    
    
    return <Col>
    <h1>Poke Picker</h1>
    
    
    
    <Button onClick = {
        () => setPokemon(getRandomElement(POKEMON))
    }className = "m-4">Next Pokemon</Button>
    


    </Col>
}