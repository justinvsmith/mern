import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import AuthorList from '../components/AuthorList';

export default function AuthorMain (){
    const[authors, setAuthors] = useState([]);
    

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            })
    }, [])


    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/new">Add an author</Link>
            <h4>We have quotes by:</h4>
            <AuthorList authors={authors} setAuthors={setAuthors} />
        </div>
    )
}
