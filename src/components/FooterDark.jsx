import styles from "../modules/FooterDark.module.css";
import twitDark from "../images/twitDark.svg";
import insta from "../images/insta.svg";
import facebookDark from "../images/facebookDark.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className="mt-5">
        <footer className="container pt-5 text-light">
          <div className="row">
            <div className="col-6 col-md-3">
              <h5>Store</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-light">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/products" className="nav-link p-0 text-light">
                    Products
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/cart" className="nav-link p-0 text-light">
                    Cart
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/about" className="nav-link p-0 text-light">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h5>Be a Member</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-light">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/register" className="nav-link p-0 text-light">
                    Register
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/login" className="nav-link p-0 text-light">
                    Login
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/admin" className="nav-link p-0 text-light">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-5 mt-4 mt-md-0">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-light border-dark">
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between pt-4 mt-4 border-top">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="http://twitter.com/gopro">
                  <img
                    className={styles.footerLogo}
                    src={twitDark}
                    alt="twitter logo"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="http://instagram.com/gopro">
                  <img
                    className={styles.footerLogo}
                    src={insta}
                    alt="twitter logo"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="http://facebook.com/gopro">
                  <img
                    className={styles.footerLogo}
                    src={facebookDark}
                    alt="twitter logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
