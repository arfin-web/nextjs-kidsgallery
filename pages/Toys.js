import React, { useEffect, useState } from 'react';
import Product from './Product';

const Toys = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://calm-fjord-73469.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-primary text-center">All Toys</p>
                <div className="row g-5">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </>
    );
};

export default Toys;