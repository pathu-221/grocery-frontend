import type { FC } from 'react';

interface CartDropDownProps {}

const CartDropDown: FC<CartDropDownProps> = () => {
    return ( <div className="dropdown cart-dropdown off-canvas mr-0 mr-lg-2">
                            <a href="#" className="cart-toggle link">
                                <i className="p-icon-cart-solid">
                                    <span className="cart-count">2</span>
                                </i>
                            </a>
                            <div className="canvas-overlay"></div>
                            <div className="dropdown-box">
                                <div className="canvas-header">
                                    <h4 className="canvas-title">Shopping Cart</h4>
                                    <a href="#" className="btn btn-dark btn-link btn-close">close<i
                                            className="p-icon-arrow-long-right"></i><span className="sr-only">Cart</span></a>
                                </div>
                                <div className="products scrollable">
                                    <div className="product product-mini">
                                        <figure className="product-media">
                                            <a href="product-simple.html">
                                                <img src="images/cart/product.jpg" alt="product" width="84"
                                                    height="105" />
                                            </a>
                                            <a href="#" title="Remove Product" className="btn-remove">
                                                <i className="p-icon-times"></i><span className="sr-only">Close</span>
                                            </a>
                                        </figure>
                                        <div className="product-detail">
                                            <a href="product.html" className="product-name">Peanuts</a>
                                            <div className="price-box">
                                                <span className="product-quantity">7</span>
                                                <span className="product-price">$12.00</span>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- End of Cart Product --> */}
                                    <div className="product product-mini">
                                        <figure className="product-media">
                                            <a href="product-simple.html">
                                                <img src="images/cart/product.jpg" alt="product" width="84"
                                                    height="105" />
                                            </a>
                                            <a href="#" title="Remove Product" className="btn-remove">
                                                <i className="p-icon-times"></i><span className="sr-only">Close</span>
                                            </a>
                                        </figure>
                                        <div className="product-detail">
                                            <a href="product.html" className="product-name">Prime Beef</a>
                                            <div className="price-box">
                                                <span className="product-quantity">4</span>
                                                <span className="product-price">$16.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End of Cart Product --> */}
                                </div>
                                {/* <!-- End of Products  --> */}
                                <div className="cart-total">
                                    <label>Subtotal:</label>
                                    <span className="price">$148.00</span>
                                </div>
                                {/* <!-- End of Cart Total --> */}
                                <div className="cart-action">
                                    <a href="cart.html" className="btn btn-outline btn-dim mb-2">View
                                        Cart</a>
                                    <a href="checkout.html" className="btn btn-dim"><span>Go To Checkout</span></a>
                                </div>
                                {/* <!-- End of Cart Action --> */}
                            </div>
                            {/* <!-- End Dropdown Box --> */}
                        </div>);
}

export default CartDropDown;
