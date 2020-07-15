import React, {useState, useEffect} from 'react';
import styles from './getPokemon.module.css';

function GetPokemon(){
    const [pokemon, setPokemon] = useState([]);

    function handleClick(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=200')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .catch(console.log);
        console.log("hello");
    }

    return (
        <div>
            <ul>
        <button className={styles.button} onClick={handleClick}>Fetch Pokemon</button>
        {pokemon.map((pokemon, index) => {
            return(<li className={styles.list} key={index}>{pokemon.name}</li>)
    })}
    </ul>
    </div>
    )
}

export default GetPokemon;