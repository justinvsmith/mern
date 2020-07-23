import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

export default function EditAuthor ({id}) {
    const [authorData, setAuthorData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => setAuthorData(res.data));
    }, [id]);

    if(authorData == null) return 'Loading ...';

    return (
        <div>
            <Link to="/">Home</Link>
            <h4>Edit this author</h4>
            <AuthorForm 
                initialValues={authorData}
                method="put"
                url={'http://localhost:8000/api/authors/' + id}
            />
        </div>
    )
}