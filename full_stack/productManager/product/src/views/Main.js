import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default function Main() {
    const [products, setProducts] = useState([]);
    const[loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
    }, [])
    
    const removeFromDom = productId => {
        setProducts(products.filter(products => products._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products' , product)
            .then(res => {
                setProducts([
                    ...products,
                    res.data
                ]);
            })
    }

    return(
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

