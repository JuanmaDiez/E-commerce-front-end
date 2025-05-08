import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavbarHeader from "../components/NavbarHeader";
import styles from "../modules/Register.module.css";
import { login } from "../redux/userSlice";
import { userStore } from "../controllers/userController";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await userStore(
      firstname,
      lastname,
      email,
      password,
      address,
      phoneNumber,
      password
    );

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
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
                placeholder="Firstname..."
                required
              />
            </div>
            <div className="form-group mb-2">
              <label for="exampleFormControlInput2">Lastname</label>
              <input
                type="text"
                className={styles.inputRegister + " form-control"}
                id="exampleFormControlInput2"
                name="lastname"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={address}
                onChange={(event) => setAddress(event.target.value)}
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
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
