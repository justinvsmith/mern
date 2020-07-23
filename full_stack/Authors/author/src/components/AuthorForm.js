import React, {useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

export default function AuthorForm({initialValues, method, url}){
    const [name, setName] = useState(initialValues.name);
    const [errors, setErrors] =useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();

        axios[method](url, {
            name
        })
            .then(() => navigate('/'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].properties.message)
                }
                setErrors(errorArr);
            })
    }

    const cancelHandler = () => {
        navigate('/');
    }



    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => { return <p key={index}>{err}</p>})}
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <button type="button" onClick={cancelHandler}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
    )

}

