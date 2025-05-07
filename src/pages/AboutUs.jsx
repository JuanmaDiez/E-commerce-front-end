import NavbarDark from "../components/NavbarDark";
import styles from "../modules/AboutUs.module.css";
import reactIcon from "../images/reactIcon.svg";
import reduxIcon from "../images/reduxIcon.svg";
import javaScriptLogo from "../images/javaScriptLogo.svg";
import mongodbIcon from "../images/mongodbIcon.svg";
import nodejsIcon from "../images/nodejsIcon.svg";
import cssIcon from "../images/cssIcon.svg";
import githubIcon from "../images/gitHub.svg";
import bootstrapIcon from "../images/bootstrapIcon.svg";
import trelloIcon from "../images/trelloIcon.svg";
import linkedin from "../images/linkedin.png";
import gitHub from "../images/gitHub.svg";
import imgAle from "../images/aboutUsImg1.jpeg";
import imgJuanma from "../images/aboutUsImg2.jpeg";
import imgSanti from "../images/aboutUsImg3.jpeg";
import imgJoaco from "../images/aboutUsImg4.jpeg";
import Footer from "../components/FooterDark";
import Admin from "../components/Admin";

function AboutUs() {
  return (
    <>
      <NavbarDark />
      <div className={styles.aboutUs + " container d-flex mt-5"}>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center mb-4">About This Project</h2>
            <p>
              We are all very different. We were born in different cities, at
              different times, we love different music, food, movies. But we
              have something that unites us all. It is our project. We are its
              heart. We are not just a team, we are a family.
            </p>
            <p>
              This e-commerce was born as the final project of the Hack Academy
              Coding Bootcamp course, an institute specialized in forging
              talents to enter the technological field. The Coding Bootcamp
              proposes 3 months of extremely practical hard work, where the
              student dedicates more than 600 hours to acquire the necessary
              knowledge to contribute to the industry, using agile methodologies
              (SCRUM), thus simulating a real work environment. The result of
              this project was achieved in just 3 weeks, where in addition to
              integrating the knowledge acquired in the course, we find
              ourselves with the challenge of collaborating with a team,
              coordinating and organizing in a limited time, as well as
              adjusting to the proposed deadlines. It was possible to meet both
              the design objectives and the operating objectives in their
              entirety.
            </p>
          </div>
        </div>

        <h2 className="mt-4">Collaborators</h2>
        <div className="row d-flex mt-3">
          <div
            className={
              styles.collaborators + " col-sm-12 col-md-6 col-sm-3 mb-5"
            }
          >
            <img
              src={imgAle}
              alt="Alejandro Gonzalez"
              className={styles.imgCollaborators}
            />
            <div>
              <div>
                <small className={styles.collaboratorsInfo}>
                  Alejandro Gonzalez
                </small>
              </div>
              <div>
                <small className={styles.collaboratorsInfo}>
                  Full Stack Developer Jr.
                </small>
              </div>
              <div>
                <a className="link-dark" href="http://linkedin.com/in/agtalvi">
                  <img
                    className={styles.collaboratorsLogo}
                    src={linkedin}
                    alt="Linkedin logo"
                  />
                </a>
                <a className="link-dark" href="https://github.com/agtalvi">
                  <img
                    className={styles.collaboratorsLogo}
                    src={gitHub}
                    alt="GitHub logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              styles.collaborators + " col-sm-12 col-md-6 col-sm-3 mb-5"
            }
          >
            <img
              src={imgJuanma}
              alt="Juan Manuel Diez"
              className={styles.imgJuanma}
            />
            <div>
              <div>
                <small className={styles.collaboratorsInfo}>
                  Juan Manuel Diez
                </small>
              </div>
              <div>
                <small className={styles.collaboratorsInfo}>
                  Full Stack Developer Jr.
                </small>
              </div>
              <div>
                <a
                  className="link-dark"
                  href="http://linkedin.com/in/juan-manuel-diez-yapur"
                >
                  <img
                    className={styles.collaboratorsLogo}
                    src={linkedin}
                    alt="Linkedin"
                  />
                </a>
                <a className="link-dark" href="https://github.com/JuanmaDiez">
                  <img
                    className={styles.collaboratorsLogo}
                    src={gitHub}
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              styles.collaborators + " col-sm-12 col-md-6 col-sm-3 mb-5"
            }
          >
            <img
              src={imgSanti}
              className={styles.imgCollaborators}
              alt="Santiago Gaggero"
            />
            <div>
              <div>
                <small className={styles.collaboratorsInfo}>
                  Santiago Gaggero
                </small>
              </div>
              <div>
                <small className={styles.collaboratorsInfo}>
                  Full Stack Developer Jr.
                </small>
              </div>
              <div>
                <a
                  className="link-dark"
                  href="https://www.linkedin.com/in/santiago-gaggero-dohir-31846b1b7/"
                >
                  <img
                    className={styles.collaboratorsLogo}
                    src={linkedin}
                    alt="Linkedin"
                  />
                </a>
                <a className="link-dark" href="https://github.com/santiagoG10">
                  <img
                    className={styles.collaboratorsLogo}
                    src={gitHub}
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              styles.collaborators + " col-sm-12 col-md-6 col-sm-3 mb-5"
            }
          >
            <img
              src={imgJoaco}
              className={styles.imgCollaborators}
              alt="Joaquin Rodriguez"
            />
            <div>
              <div>
                <small className={styles.collaboratorsInfo}>
                  Joaquin Rodriguez
                </small>
              </div>
              <div>
                <small className={styles.collaboratorsInfo}>
                  Full Stack Developer Jr.
                </small>
              </div>
              <div>
                <a
                  className="link-dark"
                  href="https://www.linkedin.com/in/joaquin-rodriguez-abel-a1b93514b/"
                >
                  <img
                    className={styles.collaboratorsLogo}
                    src={linkedin}
                    alt="Linkedin"
                  />
                </a>
                <a className="link-dark" href="https://github.com/kakorod">
                  <img
                    className={styles.collaboratorsLogo}
                    src={gitHub}
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-5 mb-5">Used Technologies</h2>
        <div
          className={
            styles.logoWrapper +
            " d-lg-flex d-sm-block justify-content-center align-items-center"
          }
        >
          <div className={styles.logoContainer + " "}>
            <img src={reactIcon} alt="React" />
            <img src={reduxIcon} alt="redux" />
            <img src={javaScriptLogo} alt="javaScript" />
          </div>
          <div className={styles.logoContainer}>
            <img src={mongodbIcon} alt="mongoDB" />
            <img src={nodejsIcon} alt="nodejs" />
            <img src={cssIcon} alt="css" />
          </div>
          <div className={styles.logoContainer}>
            <img src={githubIcon} alt="gitHub" />
            <img src={bootstrapIcon} alt="bootstrap" />
            <img src={trelloIcon} alt="trello" />
          </div>
        </div>
        <Admin />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
