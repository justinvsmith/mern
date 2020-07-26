import React, {useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

export default function PlayerForm({initialValue, method, url}){
    const [playerName, setPlayerName] = useState(initialValue.playerName);
    const [preferredPosition, setPreferredPosition] = useState(initialValue.preferredPosition);
    const [errors, setErrors] =useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();

        axios[method](url, {
            playerName,
            preferredPosition
        })
            .then(() => navigate('/players/list'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].properties.message)
                }
                setErrors(errorArr);

            //     setErrors(Object.values(err.response.data.errors)
            //                 .map())
        })
    }

    const cancelHandler = () => {
        navigate('/');
    }



    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => { return <p key={index}>{err}</p>})}
            <div>
                <label>Player Name:</label>
                <input type="text" value={playerName} onChange={e => setPlayerName(e.target.value)} />
            </div>
            <div>
                <label>Preferred Position:</label>
                <input type="text" value={preferredPosition} onChange={e => setPreferredPosition(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}

