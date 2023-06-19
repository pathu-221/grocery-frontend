import type { FC } from 'react';

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = () => {
    return (
        <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay">
        </div>
        <a className="mobile-menu-close" href="#"><i className="p-icon-times close-icon"></i></a>
        <div className="mobile-menu-container scrollable">
            <form action="#" className="inline-form">
                <input type="search" name="search" autoComplete="off" placeholder="Search your keyword..." required />
                <button className="btn btn-search" type="submit">
                    <i className="p-icon-search-solid"></i>
                </button>
            </form>
            <ul className="mobile-menu mmenu-anim">
                <li>
                    <a href="demo1.html">Home</a>
                </li>
                <li>
                    <a href="shop.html">Shop</a>
                    <ul>
                        <li>
                            <a href="#">
                                Shop Layouts
                            </a>
                            <ul>
                                <li><a href="shop-list.html">Shop list</a></li>
                                <li><a href="shop-3-cols.html">3 Columns mode</a>
                                </li>
                                <li><a href="shop-4-cols.html">4 Columns mode</a></li>
                                <li><a href="shop-5-cols.html">5 Columns mode</a>
                                </li>
                                <li><a href="shop-6-cols.html">6 Columns mode</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                Shop Variations
                            </a>
                            <ul>
                                <li><a href="shop-left-sidebar.html">With left sidebar</a>
                                </li>
                                <li><a href="shop-full-width.html">Full width</a>
                                </li>
                                <li><a href="shop-horizontal-filter.html">Horizontal filter</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                Product Details
                            </a>
                            <ul>
                                <li><a href="product-simple.html">Default</a></li>
                                <li><a href="product-gallery.html">Gallery</a></li>
                                <li><a href="product-sticky.html">Sticky info</a></li>
                                <li><a href="product-full.html">Full width</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                Woo Subpages
                            </a>
                            <ul>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="account.html">My account</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Elements</a>
                    <ul>
                        <li>
                            <a href="#">Elements 1</a>
                            <ul>
                                <li><a href="element-accordions.html">Accordion</a></li>
                                <li><a href="element-alerts.html">Alert & Notification</a></li>
                                <li><a href="element-banner.html">Banner
                                    </a></li>
                                <li><a href="element-banner-effect.html">Banner Effect
                                    </a></li>
                                <li><a href="element-blog.html">Blog</a></li>
                                <li><a href="element-button.html">Button</a></li>
                                <li><a href="element-columns.html">Columns
                                    </a></li>
                                <li><a href="element-countdown.html">Countdown</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Elements 2</a>
                            <ul>
                                <li><a href="element-creative-grid.html">Creative Grid</a></li>
                                <li><a href="element-counter.html">Counter
                                    </a></li>
                                <li><a href="element-entrance-effect.html">Entrance Effect
                                    </a></li>
                                <li><a href="element-mouse-tracking.html">Mouse Tracking Effect
                                    </a></li>
                                <li><a href="element-hotspot.html">Hotspot
                                    </a></li>
                                <li><a href="element-icon-box.html">Icon Box</a></li>
                                <li><a href="element-icons.html">Icon Library</a></li>
                                <li><a href="element-image-box.html">Image box
                                    </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Elements 3</a>
                            <ul>
                                <li><a href="element-image-gallery.html">Image Gallery</a></li>
                                <li><a href="element-categories.html">Category</a></li>
                                <li><a href="element-products.html">Products
                                    </a></li>
                                <li><a href="element-product-banner.html">Products + Banner
                                    </a></li>
                                <li><a href="element-product-tabs.html">Product Tab
                                    </a>
                                </li>
                                <li><a href="element-section.html">Section Divider

                                    </a></li>
                                <li><a href="element-slider.html">Slider
                                    </a></li>
                                <li><a href="element-social.html">Social Icons
                                    </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Elements 4</a>
                            <ul>
                                <li><a href="element-tabs.html">Tabs
                                    </a></li>
                                <li><a href="element-testimonial.html">Testimonial

                                    </a></li>
                                <li><a href="element-title.html">Title</a></li>
                                <li><a href="element-typography.html">Typography
                                    </a></li>
                                <li><a href="element-video.html">Video</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="blog.html">Blog</a>
                    <ul>
                        <li><a href="blog.html">Classic</a></li>
                        <li><a href="blog-single.html">Single Post</a></li>
                        <li><a href="blog-2-grid.html">Grid 2 Columns</a></li>
                        <li><a href="blog-3-grid.html">Grid 3 Columns</a></li>
                        <li><a href="blog-4-grid.html">Grid 4 Columns</a></li>
                        <li><a href="blog-sidebar.html">Grid Sidebar</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Pages</a>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="account.html">My Account</a></li>
                        <li><a href="faq.html">Faqs</a></li>
                        <li><a href="error.html">Error 404</a></li>
                        <li><a href="coming.html">Coming Soon</a></li>
                    </ul>
                </li>
                <li><a href="https://d-themes.com/buynow/pandahtml/">Buy Panda!</a></li>
            </ul>
        </div>
    </div>
    );
}

export default MobileMenu;
