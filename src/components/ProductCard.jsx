import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OutOfStock from "../images/out-of-stock.png";
import styles from "../modules/ProductCard.module.css";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ product }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    <div className="text-center">
      <div className="d-flex justify-content-center">
        <img
          width={"auto"}
          height={160}
          src={`${process.env.REACT_APP_IMAGES_URL}/${product.image}`}
          alt="product"
          className={styles.productImage}
        />
        {product.stock === 0 ? (
          <img
            src={OutOfStock}
            alt="outOfStock"
            className={styles.outOfStock}
          />
        ) : null}
      </div>
      <h6 className="mt-2">{product.name}</h6>
      <h6 className="mt-2">${product.price}</h6>
      <div>
        {product.stock !== 0 ? (
          <button className="btn btn-dark mt-4" onClick={() => add(product)}>
            ADD TO CART
          </button>
        ) : (
          <button className="btn btn-dark mt-4" onClick={() => soldOut()}>
            SOLD OUT
          </button>
        )}
      </div>
      <div>
        <Link to={`/product/${product._id}`}>
          <button className="btn mt-2 border-dark">LEARN MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
