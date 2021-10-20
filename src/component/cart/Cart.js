import React from 'react';
import './cart.css';

const Cart = (props) => {

    const cart = props.addCart;

    console.log(props);

    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price;
    // }

    return (
        <div className="cart">

            {/*<h2> Counter: {cart.length} </h2>*/}

            {/*<div className="card">*/}
            {/*    <h2 className="themeLetter" style={{marginTop: '0'}}> Order Summary </h2>*/}
            {/*    <div className="cart-container">*/}
            {/*        <div className="property">*/}
            {/*            <h4 className="themeLetter"> Items ordered : </h4>*/}
            {/*            <p className="themeLetter"> Items : </p>*/}
            {/*            <p className="themeLetter"> Shipping & Handling : </p>*/}
            {/*            <p className="themeLetter"> Total before tax : </p>*/}
            {/*            <p className="themeLetter"> Estimated Tax : </p>*/}
            {/*        </div>*/}
            {/*        <div className="value">*/}
            {/*            <h4> 8 </h4>*/}
            {/*            <p> $868.88 </p>*/}
            {/*            <p> $7.98 </p>*/}
            {/*            <p> $876.86 </p>*/}
            {/*            <p> $87.69 </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Cart;