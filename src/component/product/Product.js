import React from 'react';
import './product.css';
import cart from "../../assets/images/cart.svg";
import info from "../../assets/images/info.svg";
import '../../assets/custom';

const Product = (props) => {

    const {key, category, name, seller, wholePrice, priceFraction, stock, star, starCount, img, url, price, shipping, features} = props.product;
    // const {description, value} = props.product.features;

    return (
        <div className="">
            <div className="card mb-4">
                <div className="img-container">
                    <img src={img} className="" alt={name}/>
                </div>
                <div className="card-body">
                    <p className="mb-1 category" title="">
                        Category:
                        <span className="themeLetter"> {category} </span>
                    </p>
                    <h5 className="card-title themeLetter" title={name}> {name} </h5>
                    <p className="themeLetter extra"> Only {stock} Stock Left </p>
                    <p className="themeLetter extra"> Shipping Charge - {shipping} </p>
                    <div className="media">
                        <h2 className="align-self-center mr-3 price" title=""> ${price} </h2>
                        <div className="media-body">
                            <div className="rating-progressbar my-3">
                                <p className="rating-value"> {star} </p>
                                <svg style={{display: 'none'}}>
                                    <defs>
                                        <symbol id="fivestars">
                                            <path
                                                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                                fill="white" fill-rule="evenodd"/>
                                            <path
                                                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                                fill="white" fill-rule="evenodd"
                                                transform="translate(24)"/>
                                            <path
                                                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                                fill="white" fill-rule="evenodd"
                                                transform="translate(48)"/>
                                            <path
                                                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                                fill="white" fill-rule="evenodd"
                                                transform="translate(72)"/>
                                            <path
                                                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                                fill="white" fill-rule="evenodd"
                                                transform="translate(96)"/>
                                        </symbol>
                                    </defs>
                                </svg>
                                <div className="rating">
                                    <progress className="rating-bg" value={star} max="5"></progress>
                                    <svg>
                                        <use xlinkHref="#fivestars"/>
                                    </svg>
                                </div>
                                <p className="total-rating"> Total Rating: {starCount} </p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn warning" title="Add to Cart" onClick={() => props.HandleToCart(props.product)}>
                            <img src={cart} alt=""/>
                        </button>
                        <a href={'#'+key} type="button" className="btn info" title="Info">
                            <img src={info} alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div id={key} className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="themeLetter"> {name} </h3>
                        <a title="Close" href="#" className="modal-close">&times;</a>
                    </div>
                    <div className="modal-body">
                        <div className="img-container" style={{borderBottom: '1px solid gray'}}>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/41LBkDN-S3L._AC_US218_.jpg"
                                 className=""
                                 alt=""/>
                        </div>
                        <h3 className="themeLetter">Features -- </h3>
                        <ul>
                            {
                                features.map(feature => <li className="themeLetter"><strong>{feature.description}:</strong> {feature.value}</li>)
                            }
                            {/*<li className="themeLetter"><strong>Display Size:</strong> 13.3 inches</li>*/}
                            {/*<li className="themeLetter"><strong>Computer Memory Size:</strong> 8.0 GB</li>*/}
                            {/*<li className="themeLetter"><strong>Operating System:</strong> Mac OS X</li>*/}
                            {/*<li className="themeLetter"><strong>Hard Disk Size:</strong> 128 GB</li>*/}
                            {/*<li className="themeLetter"><strong>Cpu Model Family:</strong> core i5</li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;