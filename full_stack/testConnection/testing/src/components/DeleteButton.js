import React from 'react';
import axios from 'axios';

export default function DeleteButton(props) {
    const {playerId, successCallBack} = props;

    const deleteAuthor = e => {
    axios.delete('http://localhost:8000/api/players/' + playerId)
        .then(res=>{
            successCallBack();
        })
    }

    return (
        <button onClick={deleteAuthor}>Delete</button>
    )
}