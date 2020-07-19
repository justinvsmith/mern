
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default function Details (props){
    // const {removeFromDom} = props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => setProducts(res.data))
    }, [props]);

    const removeFromDom = productId => {
        setProducts(products.filter(products => products._id !== productId));
    }



    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })

            navigate('/', {replace: true})
    }

    return(
        <div>
            <h2>{products.title}-{products.id}</h2>
            <p>Price: ${products.price}</p>
            <p>Description: {products.description}</p>
            <Link to={"/" + products._id + "/edit"}>Edit Product</Link>
            |
            <button onClick={(e) => {deleteProduct(products._id)}}>Delete Product</button>
        </div>
    )
}