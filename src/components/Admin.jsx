import styles from "../modules/Admin.module.css";

function Admin() {
  return (
    <div className={styles.componentStyle + " container"}>
      <div className="d-flex justify-content-center mb-4 mt-3">
        <h2 className="mt-3 mb-1">Admin Project</h2>
      </div>
      <div>
        <p className={styles.paragraphStyle + " col-lg-8 offset-lg-2"}>
          To achieve the full real e-commerce experience, we had to create an
          Administrator project. After deliberating among the team members, we
          decided that the Administrator project should be set up separately,
          where the Administrator could consume the same API that the FrontEnd
          does, and make the pertinent changes to the database. In this way, the
          administrator can perform CRUD of products, categories and
          administrators. The administrator can also see all orders placed on
          the website.
        </p>
        <p className="col-lg-8 offset-lg-2">
          If you would like to log in as an Admin click the following button,
          but remember, with great power comes great responsibility.
        </p>
        <div className="col-lg-8 offset-lg-2">
          <a href={process.env.REACT_APP_ADMIN_URL} className="btn btn-dark">
            Admin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Admin;
