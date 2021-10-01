import React, {useState} from 'react';
import {Button, Col} from 'react-bootstrap';
import {Pokemon} from '../interfaces/pokemon';
import Image from 'react-bootstrap/Image'

export function PokemonViewer({pokemon}: {pokemon: Pokemon}): JSX.Element {
    const [score, setScore] = useState(0);
    return(
        <main>
            <Col>
            <h1>Pokemon Viewer</h1>
            <h2>Score: {score}</h2>
            <div><Image src = {pokemon.Image} thumbnail/></div>
            </Col>
            <Button onClick = {
        () => {var response = window.prompt("Who's that pokemon?!: ")
            if (response?.toLowerCase() == pokemon.Name){
                alert(
                    "Correct!"
                )
                setScore(score+1);
            }
            else{
                alert(
                    "Incorrect!"
                )
            }
    }
    }className = "m-4">Guess</Button>
        </main>
    )
}