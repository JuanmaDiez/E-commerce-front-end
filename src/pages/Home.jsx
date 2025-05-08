import { useState, useEffect } from "react";
import NavbarHeader from "../components/NavbarHeader";
import VideoHome from "../components/VideoHome";
import Categories from "../components/Categories";
import ProductSlider from "../components/ProductSlider";
import FooterDark from "../components/FooterDark";
import AboutUsHome from "../components/AboutUsHome";
import Admin from "../components/Admin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productIndex } from "../controllers/productController";

function Home() {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const response = await productIndex(true);

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
    <>
      <NavbarHeader />

      <VideoHome />

      <Categories />

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

      <ProductSlider products={products} />

      <AboutUsHome />

      <Admin />

      <FooterDark />
    </>
  );
}

export default Home;
