import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NabvarDark from "../components/NavbarDark";
import styles from "../modules/Payments.module.css";
import { format } from "date-fns";
import { edit_data } from "../redux/userSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserOrders() {
  const [profileUser, setProfileUser] = useState(null);
  const user = useSelector((state) => state.user);
  const [displayInfo, setDisplayInfo] = useState("d-block");
  const [displayForm, setDisplayForm] = useState("d-none");
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [address, setAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [prePassword, setPrePassword] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/users/${user.id}`,
        method: "GET",
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setProfileUser(response.data);
    };
    getUser();
  }, [user.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!prePassword) return toast.error("Must enter password to set changes");
    const modifiedData = async () => {
      try {
        const response = await axios({
          url: `${process.env.REACT_APP_API_URL}/users/${user.id}`,
          method: "PATCH",
          data: {
            firstname: firstname || profileUser.firstname,
            lastname: lastname || profileUser.lastname,
            address: address || profileUser.address,
            phoneNumber: phoneNumber || profileUser.phoneNumber,
            email: email || profileUser.email,
            prePassword: prePassword,
            password: password,
          },
          headers: { Authorization: `Bearer ${user.token}` },
        });
        dispatch(
          edit_data({
            firstname: firstname || user.firstname,
            lastname: lastname || user.lastname,
            address: address || user.address,
            phoneNumber: phoneNumber || user.phoneNumber,
            email: email || user.email,
          })
        );
        setDisplayForm("d-none");
        setDisplayInfo("d-block");
        toast.warning("Information altered");
      } catch (error) {
        toast.error("Wrong password");
      }
    };

    modifiedData();
  };

  return (
    profileUser && (
      <>
        <NabvarDark />
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
        <div className="container mt-5">
          <h3>Personal Information</h3>
          <div className={`col-6 ${displayInfo}`}>
            <h6>Firstname: {user.firstname}</h6>
            <h6>Lastname: {user.lastname}</h6>
            <h6>Email: {user.email}</h6>
            <h6>Address: {user.address}</h6>
            <h6>Phone Number: {user.phoneNumber}</h6>
          </div>
          <div className={`col-6 ${displayInfo}`}>
            {" "}
            <button
              className="btn btn-dark"
              onClick={() => {
                setDisplayInfo("d-none");
                setDisplayForm("d-block");
              }}
            >
              Edit Information
            </button>
          </div>
          <div className={`row ${displayForm}`}>
            <form
              className="col-sm-12 col-md-8 col-lg-6"
              onSubmit={(event) => handleSubmit(event)}
            >
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">Firstname</label>
                <input
                  type="text"
                  className={styles.inputRegister + " form-control"}
                  id="exampleFormControlInput1"
                  name="firstname"
                  placeholder="Firstname..."
                  defaultValue={profileUser.firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">Lastname</label>
                <input
                  type="text"
                  className={styles.inputRegister + " form-control"}
                  id="exampleFormControlInput1"
                  name="lastname"
                  placeholder="Lastname..."
                  defaultValue={profileUser.lastname}
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">Email</label>
                <input
                  type="text"
                  className={styles.inputRegister + " form-control"}
                  id="exampleFormControlInput1"
                  name="email"
                  defaultValue={profileUser.email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">Address</label>
                <input
                  type="text"
                  className={styles.inputRegister + " form-control"}
                  id="exampleFormControlInput1"
                  name="address"
                  placeholder="Address..."
                  defaultValue={profileUser.address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="text"
                  className={styles.inputRegister + " form-control"}
                  id="exampleFormControlInput1"
                  name="phoneNumber"
                  placeholder="Phone Number..."
                  defaultValue={profileUser.phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">Password</label>
                <input
                  type="password"
                  className={styles.inputRegister + " form-control"}
                  id="prePassword"
                  name="prePassword"
                  placeholder="Password"
                  onChange={(event) => setPrePassword(event.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">New Password</label>
                <input
                  type="password"
                  className={styles.inputRegister + " form-control"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button
                className="btn btn-dark"
                onClick={() => {
                  setDisplayInfo("d-block");
                  setDisplayForm("d-none");
                }}
              >
                Save Changes
              </button>
            </form>
          </div>
          <hr />
          <h3>Your Orders</h3>
          {profileUser.purchases.map((order) => {
            return (
              <div
                key={order._id}
                className="d-flex justify-content-between pt-3 border border-grey border-start-0 border-end-0"
              >
                <p className="mb-0">
                  <strong>Order Placed: </strong>{" "}
                  {format(new Date(order.createdAt), "yyyy-MM-dd")}{" "}
                </p>
                <p className="mb-0">
                  <strong>Total: </strong> {order.price.toFixed(2)}{" "}
                </p>
                <p>
                  <strong>Ship To: </strong> {profileUser.address}
                </p>
              </div>
            );
          })}
        </div>
      </>
    )
  );
}

export default UserOrders;
