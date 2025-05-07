import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavbarHeader from "../components/NavbarHeader";
import styles from "../modules/Register.module.css";
import { login } from "../redux/userSlice";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await axios({
      url: "http://localhost:8000/users",
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(login(response.data));
    navigate("/");
  };

  return (
    <div>
      <NavbarHeader />
      <div className={styles.register + " d-flex align-items-center"}>
        <div className="container">
          <form
            onSubmit={(event) => handleSubmit(event)}
            className={`${styles.signUpForm} mx-auto`}
          >
            <h5>Sign up</h5>
            <div className="form-group mb-2">
              <label for="exampleFormControlInput1">Firstname</label>
              <input
                type="text"
                className={styles.inputRegister + " form-control"}
                id="exampleFormControlInput1"
                name="firstname"
                placeholder="Firstname..."
              />
            </div>
            <div className="form-group mb-2">
              <label for="exampleFormControlInput2">Lastname</label>
              <input
                type="text"
                className={styles.inputRegister + " form-control"}
                id="exampleFormControlInput2"
                name="lastname"
                placeholder="Lastname..."
              />
            </div>
            <div className="form-group mb-2">
              <label for="exampleFormControlInput3">Email address</label>
              <input
                type="text"
                className={styles.inputRegister + " form-control"}
                id="exampleFormControlInput3"
                name="email"
                placeholder="Email..."
              />
            </div>
            <div className="form-group mb-2">
              <label for="exampleFormControlInput4">Address</label>
              <input
                type="text"
                className={styles.inputRegister + " form-control"}
                id="exampleFormControlInput4"
                name="address"
                placeholder="Address..."
              />
            </div>
            <div className="form-group mb-2">
              <label for="exampleFormControlInput5">Phone Number</label>
              <input
                type="text"
                className={styles.inputRegister + " form-control"}
                id="exampleFormControlInput5"
                name="phoneNumber"
                placeholder="Phone Number..."
              />
            </div>
            <div className="form-group mb-2">
              <label for="exampleFormControlInput6">Password</label>
              <input
                type="password"
                className={styles.inputRegister + " form-control"}
                id="exampleFormControlInput6"
                name="password"
                placeholder="Password..."
              />
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <button type="submit" className="btn btn-dark mt-3">
                  Sign up
                </button>
              </div>
              <small className="mt-4">
                Already registered?
                <Link to="/login" className={styles.hyperlink}>
                  Sign in
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
