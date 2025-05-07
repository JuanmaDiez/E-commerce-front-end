import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../modules/Categories.module.css";

function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/categories`,
        method: "GET",
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    categories && (
      <div className="container">
        <div className="d-flex justify-content-center mb-4 mt-3">
          <h2 className="mt-3 mb-3">Shop By Activity</h2>
        </div>
        <div className="row">
          {categories.map((category) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className={styles.card}>
                  <Link to={`/category/${category.name}`}>
                    <img
                      src={`${process.env.REACT_APP_IMAGES_URL}/${category.image1}`}
                      alt={category.name}
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}

export default Categories;
