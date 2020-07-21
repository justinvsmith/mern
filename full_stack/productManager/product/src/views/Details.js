
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';


export default function Details (props){
    // const {removeFromDom} = props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => setProducts(res.data))
    }, [props]);

    return(
        <div>
            <h2>{products.title}</h2>
            <p>Price: ${products.price}</p>
            <p>Description: {products.description}</p>
            <Link to={"/" + products._id + "/edit"}>Edit Product</Link>
            |
            <DeleteButton productId={products._id} successCallback={() => navigate("/")} />
        </div>
    )
}