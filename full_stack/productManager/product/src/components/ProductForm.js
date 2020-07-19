import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import styles from './product.module.css';

function ProductForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Product Manager</h3>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <Form.Row className={styles.rows}>
                    <label className={styles.labels}>Title</label>
                    <Form.Control className={styles.inputs} type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </Form.Row>
                <Form.Row className={styles.rows}>
                    <label className={styles.labels}>Price</label>
                    <Form.Control className={styles.inputs} type="text" onChange={(e) => setPrice(e.target.value)} value={price}/>
                </Form.Row>
                <Form.Row className={styles.rows}>
                    <label className={styles.labels}>Description</label>
                    <Form.Control className={styles.inputs} type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
                </Form.Row>
                <input className={styles.button} type="submit" value="create" />
            </form>
        </div>
    )
}

export default ProductForm;