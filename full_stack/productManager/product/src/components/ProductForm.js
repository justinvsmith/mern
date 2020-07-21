import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import styles from './product.module.css';

function ProductForm(props) {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();

        onSubmitProp({title, price, description});

        setTitle("")
        setPrice("")
        setDescription("")
    }

    return (
        <div>
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