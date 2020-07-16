import React, {useState, useEffect} from 'react';
import axios from 'axios';

const People = ({id}) => {
    const [people, setPeople] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id + '/')
            .then(response => {
                setPeople(response.data);
            })
    }, [id]);

    return (
        <div>
            <h1>Name: {people.name}</h1>
            <p>Gender: {people.gender}</p>
            <p>Height: {people.height}</p>
            <p>Eye Color: {people.eye_color}</p>
            <p>Skin Color: {people.skin_color}</p>
            <p>Hair Color: {people.hair_color}</p>
        </div>
    )
}

export default People;


