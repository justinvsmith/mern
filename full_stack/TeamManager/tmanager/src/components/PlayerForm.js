import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function PlayerForm ({initialValues, method, url}) {
    const [playerName, setPlayerName] = useState(initialValues.playerName)
    const [preferredPosition, setPreferredPosition] = useState(initialValues.preferredPosition);
    const [errors, setErrors] = useState([]);

    const submitHandler = e => {
        e.preventDefault();

        axios[method](url, {
            playerName,
            preferredPosition
        })
            .then(() => navigate('/players/list'))
            .catch(err => {
                setErrors(
                    Object.values(err.response.data.errors)
                        .map(val => val.properties.message)
                );
            });
    }

    return (
        <div>
            <h3>Add Player</h3>
            <form onSubmit={submitHandler}>
                {errors.map((err, index) => {return <p key={index}>{err}</p>})}
                <div>
                    <label>Player Name:</label>
                    <input type="text" onChange={e => setPlayerName(e.target.value)} value={playerName}/>
                </div>
                <div>
                    <label>Preferred Position</label>
                    <input type="text" onChange={e => setPreferredPosition(e.target.value)} value={preferredPosition}/>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}