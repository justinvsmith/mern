import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Planets ({ id }) {
    const [planets, setPlanets] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id + '/')
            .then(response => {
                setPlanets(response.data);
            })
    }, [id]);

    return (
        <div>
            <h1>Name: {planets.name}</h1>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Population: {planets.population}</p>
            <p>Gravity: {planets.gravity}</p>
        </div>
    )
}

export default Planets;