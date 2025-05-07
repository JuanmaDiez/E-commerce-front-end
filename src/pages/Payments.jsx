import React from "react";
import NavbarDark from "../components/NavbarDark";
import styles from "../modules/Payments.module.css";
import { useSelector } from "react-redux";
import FooterDark from "../components/FooterDark";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { emptyCart } from "../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payments() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [alert, setAlert] = useState(null);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `${process.env.REACT_APP_API_URL}/orders`,
      method: "POST",
      data: {
        products: cart,
        price: cart.reduce(
          (acc, current) => acc + current.quantity * current.price,
          10
        ),
      },
      headers: { Authorization: `Bearer ${user.token}` },
    });
    dispatch(emptyCart());
    setAlert("Thanks for shopping with us!");
    toast.success("Purchased! We hope you like it!")
  };

  return (
    <>
      <NavbarDark />
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
      <div className="container">
        {alert ? (
          <div className="d-flex flex-column align-items-center">
            <h3 className="text-center mt-5">{alert}</h3>
            <Link to="/products">
              <button className="btn btn-dark mt-3">Keep Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="row">
              <form className="col-sm-12 col-md-8 col-lg-6">
                <h4 className="mt-5">Shipping</h4>
                <div className="form-group mb-2">
                  <label for="exampleFormControlInput1">Firstname</label>
                  <input
                    type="text"
                    className={styles.inputRegister + " form-control"}
                    id="exampleFormControlInput1"
                    name="firstname"
                    placeholder="Firstname..."
                    defaultValue={user.firstname}
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
                    defaultValue={user.lastname}
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
                    defaultValue={user.address}
                  />
                </div>
                <div className="form-group mb-2">
                  <label for="exampleFormControlInput1">City</label>
                  <input
                    type="text"
                    className={styles.inputRegister + " form-control"}
                    id="exampleFormControlInput1"
                    name="city"
                    defaultValue="Montevideo"
                  />
                </div>
                <div className="form-group mb-2">
                  <label for="exampleFormControlInput1">State</label>
                  <input
                    type="text"
                    className={styles.inputRegister + " form-control"}
                    id="exampleFormControlInput1"
                    name="state"
                    defaultValue="Montevideo"
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
                    defaultValue={user.phoneNumber}
                  />
                </div>
              </form>
              <div
                className={`${styles.summary} col-sm-12 col-md-8 col-lg-3 mt-5 ms-4`}
              >
                <h4 className="mt-3">Order Summary</h4>
                <div className="row">
                  <div className="col-8">
                    <h6 className="mt-3">Subtotal</h6>
                    <small>Shipping</small>
                    <hr />
                    <p className="mt-5">Estimated Total</p>
                  </div>
                  <div className="col-4">
                    <h6 className="mt-3">
                      $
                      {cart
                        .reduce(
                          (acc, current) =>
                            acc + current.quantity * current.price,
                          0
                        )
                        .toFixed(2)}
                    </h6>
                    <small>$10.00</small>
                    <hr />
                    <p className="mt-5">
                      $
                      {cart
                        .reduce(
                          (acc, current) =>
                            acc + current.quantity * current.price,
                          10
                        )
                        .toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form
              className="col-sm-12 col-md-8 col-lg-6"
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <h4 className="mt-5">Payment</h4>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">Credit Card Number</label>
                <input
                  type="text"
                  className={styles.inputRegister + " form-control"}
                  id="exampleFormControlInput1"
                  name="number"
                  placeholder="1496 3264 9578 1411"
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">Expiration Date</label>
                <input
                  type="text"
                  className={styles.inputRegister + " form-control"}
                  id="exampleFormControlInput1"
                  name="expiration"
                  placeholder="12/2024"
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">CVV</label>
                <input
                  type="text"
                  className={styles.inputRegister + " form-control"}
                  id="exampleFormControlInput1"
                  name="cvv"
                  placeholder="***"
                />
              </div>
              <div className="form-group mb-2">
                <label for="exampleFormControlInput1">
                  Name in Credit Card{" "}
                </label>
                <input
                  type="text"
                  className={styles.inputRegister + " form-control"}
                  id="exampleFormControlInput1"
                  name="city"
                  placeholder="Diego Perez"
                />
              </div>
              <div>
                <input type="checkbox" className="form-check-label" />
                <label htmlFor="gridCheck" className="ms-2 form-check-label">
                  I Accept Terms & Conditions
                </label>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-dark">
                  COMPLETE PAYMENT
                </button>
              </div>
            </form>
          </>
        )}
      </div>
      <FooterDark />
    </>
  );
}

export default Payments;
