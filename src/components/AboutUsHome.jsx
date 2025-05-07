import { Link } from "react-router-dom";
import teamwork from "../images/teamwork.jpg";
import styles from "../modules/AboutUsHome.module.css";

function AboutUsHome() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-4 mt-3">
        <h2 className="mt-3 mb-3">About This Project</h2>
      </div>
      <div className={styles.paragraphStyle + " row"}>
        <div className="col-sm-12 col-md-8">
          <p>
            This website is an e-commerce, 100% functional but non-commercial,
            created by 4 programming students of the well known Uruguaian
            academy called Hack Academy. After 3 months of hard work and a lot
            of coffee, this is the project in which we integrate everything
            learned during the Bootcamp.
          </p>
          <p>
            In the name of the team, we want to give a special thanks to our
            teachers, who with great patience have taught us countless things in
            a very short period of time, and have prepared us in the best way to
            find our place in the amazing world of programming.
          </p>
          <hr />
          <Link to={"/about"}>
            <button className="btn btn-dark mt-4 mb-5">
              About This Project
            </button>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4">
          <img
            src={teamwork}
            alt="teamwork"
            className={styles.teamworkImg + " img-fluid"}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsHome;
