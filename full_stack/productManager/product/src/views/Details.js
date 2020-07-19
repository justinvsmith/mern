
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Details (props){
    const [products, setProducts] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => setProducts(res.data))
    }, [props]);

    return(
        <div>
            <h2>{products.title}</h2>
            <p>Price: ${products.price}</p>
            <p>Description: {products.description}</p>
        </div>
    )
}