import type { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <ul className="menu menu-type2">
                        <li>
                            <a href="about.html">About us</a>
                        </li>
                        <li>
                            <a href="#">our team</a>
                        </li>
                        <li>
                            <a href="faq.html">faq</a>
                        </li>
                        <li>
                            <a href="account.html">my account</a>
                        </li>
                        <li>
                            <a href="contact.html">contact us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-middle">
                    <div className="footer-left">
                        <ul className="widget-body">
                            <li>
                                <a href="tel:#" className="footer-icon-box">
                                    <i className="p-icon-phone-solid"></i>
                                    <span>+456 789 000</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    <i className="p-icon-map"></i>
                                    <span>25 West 21th Street, Miami FL, USA</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:mail@panda.com" className="">
                                    <i className="p-icon-message"></i>
                                    <span>info@panda.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    <i className="p-icon-clock"></i>
                                    <span>Mon-Fri: 10:00 - 18:00</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-center">
                        <a href="demo1.html" className="logo-footer">
                            <img src="images/logo.png" alt="logo-footer" width="171" height="41" />
                        </a>
                        <div className="social-links">
                            <a href="#" className="social-link fab fa-facebook-f" title="Facebook"></a>
                            <a href="#" className="social-link fab fa-twitter" title="Twitter"></a>
                            <a href="#" className="social-link fab fa-pinterest" title="Pinterest"></a>
                            <a href="#" className="social-link fab fa-linkedin-in" title="Linkedin"></a>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="widget-newsletter">
                            <h4 className="widget-title">Subscribe Newsletter</h4>
                            <p>Subscribe to the Panda eCommerce Newsletter<br /> updates from your favourite products.
                            </p>
                            <form action="#" className="form-simple">
                                <input type="email" name="email" id="email" placeholder="Email address here..."
                                    required />
                                <button className="btn btn-link" type="submit">sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">Panda eCommerce © 2022. All Rights Reserved</p>
                    <figure>
                        <img src="images/payment.png" alt="payment" width="159" height="29" />
                    </figure>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
