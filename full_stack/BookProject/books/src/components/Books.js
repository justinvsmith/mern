import React, {useState} from 'react';
import axios from 'axios';

export default function Books (){
    const [title, setTitle] = useState("");
    const[numberOfPages, setNumberOfPages] = useState("");

    const[errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/books', {
            title,
            numberOfPages
        })
            .then(response => console.log(response))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].properties.message)
                }
                setErrors(errorArr);
            })
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
    {errors.map((err, index) => { return <p key={index}>{err}</p>})}
                <p>
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Pages</label>
                    <input type="text" onChange={(e) => setNumberOfPages(+e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}