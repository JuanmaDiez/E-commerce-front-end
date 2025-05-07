import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarHeader from "../components/NavbarHeader";
import styles from "../modules/Category.module.css";
import ProductCard from "../components/ProductCard";
import FooterDark from "../components/FooterDark";
import ProductSlider from "../components/ProductSlider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Category() {
  const params = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories/${params.name}`,
        method: "GET",
      });
      setCategory(response.data);
    };
    getCategory();
  }, [params.name]);

  return (
    category && (
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
          <img
            src={`${process.env.REACT_APP_IMAGES_URL}/${category.image2}`}
            alt={category.name}
            className={styles.categoryImg}
          />
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className=" col-sm-12 col-md-6">
              <div>
                <h2 className="mb-3">{category.title}</h2>
                <p>{category.description}</p>
                {category.name === "Surf" ? <p>{category.tip}</p> : null}
                <hr />
                <div className="d-flex justify-content-between">
                  <h4>HERO11 Black</h4>
                  <h4>$499.99</h4>
                </div>
                <div className="mb-3">
                  <button className="btn btn-dark mt-5 me-2">
                    ADD TO CART
                  </button>
                  <button className="btn mt-5 border-dark">LEARN MORE</button>
                </div>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6">
              <img
                className={styles.categoryImg}
                src={`${process.env.REACT_APP_IMAGES_URL}/${category.image3}`}
                alt={category.name}
              />
            </div>
          </div>

          <div className="mt-4">
            <h2>{category.subtitle}</h2>
            <p className="mt-4">{category.incentive}</p>
          </div>
          <div className="mt-5">
            <div className="d-flex justify-content-around">
              {category.products.length > 5 ? (
                <ProductSlider products={category.products} />
              ) : (
                category.products.map((product) => {
                  return <ProductCard key={product._id} product={product} />;
                })
              )}
            </div>
          </div>
        </div>
        <FooterDark />
      </>
    )
  );
}

export default Category;
