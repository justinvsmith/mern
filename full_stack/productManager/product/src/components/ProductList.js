import React from 'react';
import {Link} from '@reach/router';

export default function ProductList(props){
    return(
        <div>
            <h1>All Products:</h1>
            <div>
                {props.products.map((product, idx) => {
                    return <p key={idx}><Link to={product._id}>{product.title}</Link></p>
                })}
            </div>
        </div>
    )

}