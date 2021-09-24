import {Button, Col} from 'react-bootstrap';
import {Pokemon} from '../interfaces/pokemon';
import Image from 'react-bootstrap/Image'

export function PokemonViewer({pokemon}: {pokemon: Pokemon}): JSX.Element {
    return <Col>
    <h1>Pokemon Viewer</h1>
    <div><Image src = {pokemon.Image} thumbnail/></div>

    <Button onClick = {
        () => {var response = window.prompt("Who's that pokemon?!: ")
            if (response?.toLowerCase() == pokemon.Name){
                alert(
                    "Correct!"
                )
            }
            else{
                alert(
                    "Incorrect!"
                )
            }
    }
    }className = "m-4">Guess</Button>
    </Col>
}