import NavbarDark from "../components/NavbarDark";
import { Link } from "react-router-dom";
import styles from "../modules/ShoppingCart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductSlider from "../components/ProductSlider";
import FooterDark from "../components/FooterDark";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/products`,
        method: "GET",
        params: { featured: true },
      });
      setFeaturedProducts(response.data);
    };
    getProducts();
  }, []);

  const add = (product) => {
    const productInCart = cart.find(
      (productInCart) => product._id === productInCart._id
    );
    if (!productInCart || product.stock !== productInCart.quantity) {
      dispatch(addToCart(product));
      toast.success("Added to cart!");
    } else {
      toast.error("No more in stock");
    }
  };

  const remove = (product) => {
    dispatch(removeFromCart(product));
    toast.error("Removed from cart");
  };

  return (
    featuredProducts && (
      <>
        <NavbarDark />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div className={`${styles.cart} container`}>
          {cart.length === 0 ? (
            <div className="d-flex flex-column align-items-center mt-5">
              <p>Your cart is empty.</p>
              <Link to={"/products"}>
                <button className="btn mt-2 border-dark">Start shopping</button>
              </Link>
            </div>
          ) : (
            <div>
              <div>
                <h3 className="mt-5">Shopping Cart</h3>
              </div>
              <div className="row mt-5">
                <div className="col-md-8">
                  {cart.map((product) => {
                    return (
                      <div className="row">
                        <div className="col-6">
                          <h5>Product Details</h5>
                          <img
                            width={"auto"}
                            height={160}
                            src={`${process.env.REACT_APP_IMAGES_URL}/${product.image}`}
                            alt="product"
                            className="mt-2"
                          />
                          <h6 className="mt-2">{product.name}</h6>
                        </div>
                        <div className="col-4">
                          <h5>Quantity</h5>
                          <div className="d-flex">
                            <button
                              type="submit"
                              className="btn btn-grey mt-2 me-2"
                              onClick={() => remove(product)}
                            >
                              -
                            </button>
                            <h6 className="mt-3">{product.quantity}</h6>
                            <button
                              type="submit"
                              className="btn btn-grey mt-2 ms-2"
                              onClick={() => add(product)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-2">
                          <h5>Total</h5>
                          <h6 className="mt-3">
                            ${product.price * product.quantity}
                          </h6>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
                </div>
                <div className="col-sm-1"></div>
                <div
                  className={`${styles.summary} col-sm-12 col-md-8 col-lg-3`}
                >
                  <h4 className="mt-5">Order Summary</h4>
                  <div className="row">
                    <div className="col-8">
                      <h6 className="mt-3">Subtotal</h6>
                      <small>Shipping</small>
                      <hr />
                      <p className="mt-5">Estimated Total</p>
                    </div>
                    <div className="col-4">
                      <h6 className="mt-3">
                        $
                        {cart
                          .reduce(
                            (acc, current) =>
                              acc + current.quantity * current.price,
                            0
                          )
                          .toFixed(2)}
                      </h6>
                      <small>$10.00</small>
                      <hr />
                      <p className="mt-5">
                        $
                        {cart
                          .reduce(
                            (acc, current) =>
                              acc + current.quantity * current.price,
                            10
                          )
                          .toFixed(2)}
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link to="/payments">
                        <button className="btn btn-dark">
                          PROCEED TO PAYMENT
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div>
            <ProductSlider products={featuredProducts} />
          </div>
        </div>
        <FooterDark />
      </>
    )
  );
}

export default ShoppingCart;
