import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../modules/Login.module.css";
import NavbarHeader from "../components/NavbarHeader";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogin } from "../controllers/userController";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (event) => {
    event.preventDefault();
    const response = await userLogin(email, password);

    if (!response.success) {
      toast.error(response.message);
      return;
    }

    dispatch(login(response.user));
    navigate("/");
  };

  return (
    <div>
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
      <div className={styles.logIn}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <form
              className={`${styles.logInForm}`}
              onSubmit={(event) => handleLogIn(event)}
            >
              <h5>Log in</h5>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="text"
                  className={styles.inputLogin + " form-control"}
                  id="exampleFormControlInput1"
                  name="email"
                  value={email}
                  placeholder="Email..."
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput2">Password</label>
                <input
                  type="password"
                  className={styles.inputLogin + " form-control"}
                  id="exampleFormControlInput2"
                  name="password"
                  placeholder="Password..."
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <button type="submit" className="btn btn-dark mt-2">
                    Sign in
                  </button>
                </div>
                <small className="mt-3">
                  Don't have an account?
                  <Link to="/register" className={styles.hyperlink}>
                    Register now!
                  </Link>
                </small>
              </div>
              <hr />
              <div>
                <small className={styles.credentials}>
                  If you want to log in as a Customer, use the following
                  credentials:
                </small>
                <div>
                  <small>Email: sg10@gmail.com</small>
                </div>
                <div>
                  <small>Password: 123456</small>
                </div>
              </div>
              <hr />
              <small>
                If you want to see the Admin project,
                <a
                  href={process.env.REACT_APP_ADMIN_URL}
                  className={styles.adminLink}
                >
                  click here!
                </a>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
