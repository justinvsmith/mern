import React from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

export default props => {
    const { removeFromDom } = props;
    
    return(
        <div>
            <h1>All Products:</h1>
            <div>
                {props.products.map((product, idx) => {
                    return <p key={idx}><Link to={"/" + product._id}>{product.title}</Link>
                    |
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />
                    </p>
                })}
            </div>
        </div>
    )

}