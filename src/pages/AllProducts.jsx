import NavbarHeader from "../components/NavbarHeader";
import styles from "../modules/AllProducts.module.css";
import ProductCard from "../components/ProductCard";
import goProPicture from "../images/goProPicture.PNG";
import FooterDark from "../components/FooterDark";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AllProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/products`,
        method: "GET",
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    products && (
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

        <div>
          <img src={goProPicture} alt="Go Pro" className={styles.cameraImg} />
        </div>
        <div className={styles.allProductsGrid}>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <FooterDark />
      </>
    )
  );
}

export default AllProducts;
