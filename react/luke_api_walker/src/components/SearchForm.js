import React, {useState} from 'react';
import {navigate} from '@reach/router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import styles from './LukeApi.module.css';


function SearchForm () {
    const [type, setType] = useState("");
    const [id, setId] = useState("");
    

    const submitHandler = (e) => {
        e.preventDefault();

        navigate("/" + type + "/" + id);

        setId("");
    }


    return(
        <div>

        <form style={styles.form} onSubmit={submitHandler}> 
            <Form.Row>
            <Form.Label className={styles.labels}>Search For:</Form.Label>
            <select className={styles.inputSpace} value={type} onChange={(e) => setType(e.target.value)}>
            <option defaultValue>Pick an option</option>
            <option value="planets">Planets</option>
            <option value="people">People</option>
            </select>
            <Form.Label className={styles.labels}>ID:</Form.Label>
            <Form.Control className={styles.smallInput} onChange={(e) => setId(e.target.value)} value={id} />
            <Button variant="primary" type="submit">Search</Button>{' '}
            </Form.Row>
        </form>
        </div>
    )
}


export default SearchForm;