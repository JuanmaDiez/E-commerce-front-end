import { useState, useEffect } from "react";
import NavbarHeader from "../components/NavbarHeader";
import VideoHome from "../components/VideoHome";
import Categories from "../components/Categories";
import ProductSlider from "../components/ProductSlider";
import FooterDark from "../components/FooterDark";
import AboutUsHome from "../components/AboutUsHome";
import Admin from "../components/Admin";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/products`,
        method: "GET",
        params: { featured: true },
      });
      setProducts(response.data);
    };
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
