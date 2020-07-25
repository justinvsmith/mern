import React, { useEffect } from 'react';
import axios from 'axios';

export default function PlayerList (props) {
    const {players, setPlayers} = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data))
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => {
                        return <tr key={index}>
                            <td>{player.playerName}</td>
                            <td>{player.preferredPosition}</td>
                            <td>Delete</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}