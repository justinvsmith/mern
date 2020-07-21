import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

export default function Edit(props){
    const {id} = props;
    const [products, setProducts] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = products => {
        axios.put('http://localhost:8000/api/products/' + id, products)
            .then(res => console.log(res));
    }


        return (
            <div>
                {loaded && 
                    <ProductForm onSubmitProp={updateProduct}
                    initialTitle={products.title}
                    initialPrice={products.price}
                    initialDescription={products.description}
                    />
                }
                |
            </div>
        )

    // return(
    //     <div>
    //         <h1>Update a Product</h1>
    //         <form onSubmit={updateProduct}>
    //             <div>
    //                 <label>Title</label>
    //                 <input type="text" name="title" value={title}
    //                     onChange={(e) => setTitle(e.target.value)} />
    //             </div>
    //             <div>
    //                 <label>Price</label>
    //                 <input type="text" name="price" value={price}
    //                     onChange={(e) => setPrice(e.target.value)} />
    //             </div>
    //             <div>
    //                 <label>Description</label>
    //                 <input type="text" name="description" value={description}
    //                     onChange={(e) => setDescription(e.target.value)} />
    //             </div>
    //             <input type="submit" value="update product" />
    //         </form>
    //     </div>
    // )
}