import React from 'react';
import AuthorForm from '../components/AuthorForm';
import { Link } from '@reach/router';

export default function NewAuthor () {

    return (
        <div>
            <Link to="/">Home</Link>
            <h4>Add a new author:</h4>
            <AuthorForm
                initialValues={{
                    name: ''
                }}
                method="post"
                url="http://localhost:8000/api/authors"
            />
        </div>
    );
}