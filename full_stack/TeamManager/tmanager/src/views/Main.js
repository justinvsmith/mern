import React, {useState} from 'react';
import PlayerManagement from './PlayerManagement';
import PlayerList from './PlayerList';
import PlayerForm from '../components/PlayerForm';
import { navigate } from '@reach/router';

export default function Main() {
    const [players, setPlayers] = useState([]);

return(
    <div>
        <PlayerManagement 
            pages={[
                {
                    name: 'List',
                    content: <PlayerList players={players} setPlayers={setPlayers} />
                },
                {
                    name: 'Add Player',
                    content: <PlayerForm 
                    initialValues={{
                        playerName: "",
                        preferredPosition: ""
                    }}
                    method="post"
                    url="http://localhost:8000/api/players"
                />
                },
                {
                    name: 'List',
                    content: "hi"
                },
            ]}
        />
    </div>
)

}