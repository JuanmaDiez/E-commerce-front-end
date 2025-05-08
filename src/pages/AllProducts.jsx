import NavbarHeader from "../components/NavbarHeader";
import styles from "../modules/AllProducts.module.css";
import ProductCard from "../components/ProductCard";
import goProPicture from "../images/goProPicture.PNG";
import FooterDark from "../components/FooterDark";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productIndex } from "../controllers/productController";

function AllProducts() {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    const response = await productIndex(null);

    if (!response.success) {
      toast.error(response.message);
      return;
    }

    setProducts(response.products);
  };

  useEffect(() => {
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
