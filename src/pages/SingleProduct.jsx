import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavbarHeader from "../components/NavbarHeader";
import { addToCart } from "../redux/cartSlice";
import FooterDark from "../components/FooterDark";
import outOfStock from "../images/out-of-stock.png";
import styles from "../modules/SingleProduct.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleProduct() {
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/products/${params.id}`,
        method: "GET",
      });
      setProduct(response.data);
    };
    getProduct();
  }, [params.id]);

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

  const soldOut = () => toast.error("Sold out");

  return (
    product && (
      <>
        <NavbarHeader />

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

        <div className=" container  mt-5">
          <div className="row">
            <div className="col-md-6">
              {product.stock === 0 ? (
                <img
                  src={outOfStock}
                  alt="out of stock"
                  className={styles.outOfStock}
                />
              ) : null}
              <img
                src={`${process.env.REACT_APP_IMAGES_URL}/${product.image}`}
                className="singleProductImg img-fluid"
                alt="product"
              />
            </div>
            <div className="col-md-6">
              <h2>{product.name}</h2>

              <div>
                <h3>Product Details </h3>
                <p>{product.description}</p>
              </div>

              <p className="fs-3 fw-bold">${product.price}</p>

              {product.stock !== 0 ? (
                <button
                  className="btn btn-dark mt-4"
                  onClick={() => add(product)}
                >
                  ADD TO CART
                </button>
              ) : (
                <button className="btn btn-dark mt-4" onClick={() => soldOut()}>
                  SOLD OUT
                </button>
              )}
            </div>
          </div>
        </div>
        <FooterDark />
      </>
    )
  );
}

export default SingleProduct;
