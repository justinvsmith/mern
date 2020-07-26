import React, {useEffect} from 'react';
import styles from '../components/test.module.css'
import {navigate} from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios'

export default function Page1(props) {
    const {players, setPlayers} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res=> setPlayers(res.data))
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }

    return(
        <div>
            <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Player Name</th>
                            <th className={styles.th}>Preferred Position</th>
                            <th className={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {players.map((player, index) => {
                        return <tr key={index} className={styles.tr}>
                            <td className={styles.td}>{player.playerName}</td>
                            <td className={styles.td}>{player.preferredPosition}</td>
                            <td className={styles.td, styles.center}><button onClick={()=>navigate("/edit/" + player._id )}>Edit</button> | <DeleteButton authorId={player._id} successCallBack={() => removeFromDom(player._id)} /></td>
                        </tr>
                    })}
                    </tbody>
                </table>
        </div>
    )
}