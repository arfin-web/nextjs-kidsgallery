import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://calm-fjord-73469.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-primary">New Arrival</p>
                <div className="row g-5">
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </>
    );
};

export default Products;