import React, {useEffect, useState} from 'react';
import './products.css';
import Product from "../product/Product";
import Cart from "../cart/Cart";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div>
            <div className="products">
                {
                    products.map(product =>
                        <Product
                            key={product.key}
                            product={product}
                            HandleToCart={addToCart}
                        >
                        </Product>)
                }
            </div>

            <div className="">
                {/*<h2> Counter: {cart.length} </h2>*/}
                <Cart addCart={cart}></Cart>
            </div>
        </div>
    );
};
export default Products;