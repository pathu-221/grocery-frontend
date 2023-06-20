

import type { FC } from 'react';
import CartTotal from './CartTotals';

interface CartProductsProps {}

const CartProducts: FC<CartProductsProps> = () => {
    return ( <div className="container mt-7 mb-2">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 pr-lg-6">
                            <table className="shop-table cart-table">
                                <thead>
                                    <tr>
                                        <th><span>Product</span></th>
                                        <th></th>
                                        <th><span>Price</span></th>
                                        <th><span>quantity</span></th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <figure>
                                                <a href="product-simple.html">
                                                    <img src="images/subpage/cart/90x112.jpg" width="90" height="112"
                                                        alt="product"/>
                                                </a>
                                            </figure>
                                        </td>
                                        <td className="product-name">
                                            <div className="product-name-section">
                                                <a href="product-simple.html">Juice</a>

                                            </div>
                                        </td>
                                        <td className="product-subtotal">
                                            <span className="amount">$129.99</span>
                                        </td>
                                        <td className="product-quantity">
                                            <div className="input-group">
                                                <button className="quantity-minus p-icon-minus-solid"></button>
                                                <input className="quantity form-control" type="number" min="1"
                                                    max="1000000"/>
                                                <button className="quantity-plus p-icon-plus-solid"></button>
                                            </div>
                                        </td>
                                        <td className="product-price">
                                            <span className="amount">$129.99</span>
                                        </td>
                                        <td className="product-remove">
                                            <a href="#" className="btn-remove" title="Remove this product">
                                                <i className="p-icon-times"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <figure>
                                                <a href="product-simple.html">
                                                    <img src="images/subpage/cart/90x112.jpg" width="90" height="112"
                                                        alt="product"/>
                                                </a>
                                            </figure>

                                        </td>
                                        <td className="product-name">
                                            <div className="product-name-section">
                                                <a href="product-simple.html">Greenhouse Cherry</a>
                                            </div>
                                        </td>
                                        <td className="product-subtotal">
                                            <span className="amount">$98.00</span>
                                        </td>
                                        <td className="product-quantity">
                                            <div className="input-group">
                                                <button className="quantity-minus p-icon-minus-solid"></button>
                                                <input className="quantity form-control" type="number" min="1"
                                                    max="1000000"/>
                                                <button className="quantity-plus p-icon-plus-solid"></button>
                                            </div>
                                        </td>
                                        <td className="product-price">
                                            <span className="amount">$98.00</span>
                                        </td>
                                        <td className="product-remove">
                                            <a href="#" className="btn-remove" title="Remove this product">
                                                <i className="p-icon-times"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="cart-actions mb-6 pt-6">
                                <a href="shop.html" className="btn btn-dim btn-icon-left mr-4 mb-4"><i
                                        className="p-icon-arrow-long-left"></i>Continue Shopping</a>
                                <button type="submit" className="btn btn-outline btn-dim">Update
                                    Cart</button>
                            </div>
                            <div className="cart-coupon-box pt-5 pb-8">
                                <h4 className="title coupon-title text-capitalize mb-4">Coupon Discount</h4>
                                <form action="#">
                                    <input type="text" name="coupon_code" className="input-text mb-6" id="coupon_code"
                                        value="" placeholder="Enter coupon code here..." required/>
                                    <button type="submit" className="btn btn-dark btn-outline">Apply
                                        Coupon</button>
                                </form>
                            </div>
                        </div>
                        <CartTotal />
                    </div>
                </div>);
}

export default CartProducts;
