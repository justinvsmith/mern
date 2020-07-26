import React from 'react';
import PlayerForm from '../components/PlayerForm';


export default function Page2() {

    return(
        <div>
            <PlayerForm
                initialValue={{
                    playerName: '',
                    preferredPosition: ''
                }}
                method="post"
                url='http://localhost:8000/api/players/'
            />
        </div>
    )
}