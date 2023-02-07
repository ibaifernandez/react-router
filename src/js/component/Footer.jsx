import React from "react";
import Favicon from "../../img/favicon.jpeg";

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">
                    &copy; 2022 Ibai Fernández, Inc.
                </p>

                <a
                    href="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                    <img className="" width="40" height="40" src={Favicon} />
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2 text-muted">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="blog" className="nav-link px-2 text-muted">
                            Blog
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="aboutus" className="nav-link px-2 text-muted">
                            About Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="contact" className="nav-link px-2 text-muted">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="nopage" className="nav-link px-2 text-muted">
                            Error 404
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
