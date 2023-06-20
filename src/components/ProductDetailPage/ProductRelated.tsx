

import type { FC } from 'react';

interface ProductRelatedProps {}

const ProductRelated: FC<ProductRelatedProps> = () => {
    return (
          <div className="container">
                <section className="mt-3">
                    <h2 className="text-center mb-7">Related Products</h2>
                    <div className="owl-carousel owl-theme owl-nav-outer slider-brand row cols-lg-4 cols-md-3 cols-2"
                        data-owl-options="{
                            'nav': true,
                            'dots': false,
                            'margin': 20,
                            'loop': false,
                            'responsive': {
                                '0': {
                                    'items': 2,
                                    'autoplay': true,
                                    'nav': false
                                },
                                '768': {
                                    'items': 3,
                                    'nav': false
                                },
                                '992': {
                                    'items': 4
                                }
                            }
                        }">
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src="images/products/295x369.jpg" alt="product" width="295" height="369" />
                                    </a>
                                    <div className="product-label-group">
                                        <label className="product-label label-new">New</label>
                                    </div>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                            data-target="#addCartModal" title="Add to Cart">
                                            <i className="p-icon-cart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to Wishlist">
                                            <i className="p-icon-heart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <i className="p-icon-compare-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-quickview" title="Quick View">
                                            <i className="p-icon-search-solid"></i>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: '60% '}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-simple.html#content-reviews"
                                            className="rating-reviews hash-scroll">(12)</a>
                                    </div>
                                    <h5 className="product-name">
                                        <a href="#">
                                            Peanuts
                                        </a>
                                    </h5>
                                    <div className="product-price">
                                        <ins className="new-price">$12.00</ins>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src="images/products/295x369.jpg" alt="product" width="295" height="369" />
                                    </a>
                                    <div className="product-label-group">
                                        <label className="product-label label-sale">-40%</label>
                                    </div>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                            data-target="#addCartModal" title="Add to Cart">
                                            <i className="p-icon-cart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to Wishlist">
                                            <i className="p-icon-heart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <i className="p-icon-compare-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-quickview" title="Quick View">
                                            <i className="p-icon-search-solid"></i>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: '60% '}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-simple.html#content-reviews"
                                            className="rating-reviews hash-scroll">(12)</a>
                                    </div>
                                    <h5 className="product-name">
                                        <a href="#">
                                            Greenhouse Bean
                                        </a>
                                    </h5>
                                    <div className="product-price">
                                        <del className="old-price">$9.00</del>
                                        <ins className="new-price">$6.00</ins>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src="images/products/295x369.jpg" alt="product" width="295" height="369" />
                                    </a>
                                    <div className="product-label-group">
                                        <label className="product-label label-sale">-24%</label>
                                    </div>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                            data-target="#addCartModal" title="Add to Cart">
                                            <i className="p-icon-cart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to Wishlist">
                                            <i className="p-icon-heart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <i className="p-icon-compare-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-quickview" title="Quick View">
                                            <i className="p-icon-search-solid"></i>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: '60%' }}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-simple.html#content-reviews"
                                            className="rating-reviews hash-scroll">(12)</a>
                                    </div>
                                    <h5 className="product-name">
                                        <a href="#">
                                            Chocolate Butter Cake
                                        </a>
                                    </h5>
                                    <div className="product-price">
                                        <ins className="new-price">$3.00</ins>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src="images/products/295x369.jpg" alt="product" width="295" height="369" />
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                            data-target="#addCartModal" title="Add to Cart">
                                            <i className="p-icon-cart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to Wishlist">
                                            <i className="p-icon-heart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <i className="p-icon-compare-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-quickview" title="Quick View">
                                            <i className="p-icon-search-solid"></i>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: '60% '}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-simple.html#content-reviews"
                                            className="rating-reviews hash-scroll">(12)</a>
                                    </div>
                                    <h5 className="product-name">
                                        <a href="#">
                                            Cake
                                        </a>
                                    </h5>
                                    <div className="product-price">
                                        <ins className="new-price">$2.75</ins>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-8 mb-9">
                    <h2 className="text-center mb-6">You Might Love These</h2>
                    <div className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2" data-owl-options="{
                                                            'nav': false,
                                                            'dots': false,
                                                            'margin': 20,
                                                            'autoplay': false,
                                                            'autoplayTimeout': 5000,
                                                            'responsive': {
                                                                '0': {
                                                                    'items': 2,
                                                                    'autoplay': true
                                                                },
                                                                '768': {
                                                                    'items': 3,
                                                                    'nav': false,
                                                                    'autoplay': true
                                                                },
                                                                '992': {
                                                                    'items': 4
                                                                }
                                                            }
                                                        }">
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src="images/products/295x369.jpg" alt="product" width="295" height="369" />
                                        <img src="images/products/600x750.jpg" alt="product" width="600" height="750" />
                                    </a>
                                    <div className="product-label-group">
                                        <label className="product-label label-new">Top</label>
                                    </div>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                            data-target="#addCartModal" title="Add to Cart">
                                            <i className="p-icon-cart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to Wishlist">
                                            <i className="p-icon-heart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <i className="p-icon-compare-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-quickview" title="Quick View">
                                            <i className="p-icon-search-solid"></i>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: '0%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-simple.html" className="rating-reviews">(0)</a>
                                    </div>
                                    <h5 className="product-name">
                                        <a href="#">
                                            Butter Glutinous Cake
                                        </a>
                                    </h5>
                                    <div className="product-price">
                                        $35.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src="images/products/295x369.jpg" alt="product" width="295" height="369" />
                                        <img src="images/products/600x750.jpg" alt="product" width="295" height="369" />
                                    </a>
                                    <div className="product-label-group">
                                        <label className="product-label label-sale">-10%</label>
                                    </div>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                            data-target="#addCartModal" title="Add to Cart">
                                            <i className="p-icon-cart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to Wishlist">
                                            <i className="p-icon-heart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <i className="p-icon-compare-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-quickview" title="Quick View">
                                            <i className="p-icon-search-solid"></i>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: '60% '}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-simple.html#content-reviews"
                                            className="rating-reviews hash-scroll">(12)</a>
                                    </div>
                                    <h5 className="product-name">
                                        <a href="#">
                                            Fresh Mulberry
                                        </a>
                                    </h5>
                                    <div className="product-price">
                                        <del className="old-price">$9.00</del>
                                        <ins className="new-price">$6.00</ins>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src="images/products/295x369.jpg" alt="product" width="295" height="369" />
                                        <img src="images/products/600x750.jpg" alt="product" width="600" height="750" />
                                    </a>
                                    <div className="product-label-group">
                                        <label className="product-label label-sale">-24%</label>
                                    </div>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                            data-target="#addCartModal" title="Add to Cart">
                                            <i className="p-icon-cart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to Wishlist">
                                            <i className="p-icon-heart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <i className="p-icon-compare-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-quickview" title="Quick View">
                                            <i className="p-icon-search-solid"></i>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: '60% '}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-simple.html#content-reviews"
                                            className="rating-reviews hash-scroll">(12)</a>
                                    </div>
                                    <h5 className="product-name">
                                        <a href="#">
                                            Prime Beef
                                        </a>
                                    </h5>
                                    <div className="product-price">
                                        $38.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src="images/products/295x369.jpg" alt="product" width="295" height="369" />
                                        <img src="images/products/600x750.jpg" alt="product" width="600" height="750" />
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                            data-target="#addCartModal" title="Add to Cart">
                                            <i className="p-icon-cart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to Wishlist">
                                            <i className="p-icon-heart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <i className="p-icon-compare-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-quickview" title="Quick View">
                                            <i className="p-icon-search-solid"></i>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: '60%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-simple.html#content-reviews"
                                            className="rating-reviews hash-scroll">(12)</a>
                                    </div>
                                    <h5 className="product-name">
                                        <a href="#">
                                            Organic Garlic
                                        </a>
                                    </h5>
                                    <div className="product-price">
                                        $12.75
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src="images/products/600x750.jpg" alt="product" width="600" height="750" />
                                        <img src="images/products/600x750.jpg" alt="product" width="600" height="750" />
                                    </a>
                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-cart" data-toggle="modal"
                                            data-target="#addCartModal" title="Add to Cart">
                                            <i className="p-icon-cart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to Wishlist">
                                            <i className="p-icon-heart-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <i className="p-icon-compare-solid"></i>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-quickview" title="Quick View">
                                            <i className="p-icon-search-solid"></i>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{ width: '60%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-simple.html#content-reviews"
                                            className="rating-reviews hash-scroll">(12)</a>
                                    </div>
                                    <h5 className="product-name">
                                        <a href="#">
                                            Fresh Ginger
                                        </a>
                                    </h5>
                                    <div className="product-price">
                                        $26.75
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
]                </section>
            </div>
    );
}

export default ProductRelated;
