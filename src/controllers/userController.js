import axios from "axios";
import {
  GET,
  POST,
  STATUS_UNAUTHORIZED,
  USERS_URL,
} from "../constants/constants";
import { INSUFFICIENT_DATA, SERVER_ERROR } from "../constants/errorMessages";

async function userStore(
  firstname,
  lastname,
  email,
  address,
  phoneNumber,
  password
) {
  if (
    !firstname ||
    !lastname ||
    !email ||
    !address ||
    !phoneNumber ||
    !password
  )
    return { success: false, message: INSUFFICIENT_DATA };

  const formData = new FormData();

  formData.append("firstname", firstname);
  formData.append("lastname", lastname);
  formData.append("email", email);
  formData.append("address", address);
  formData.append("phoneNumber", phoneNumber);
  formData.append("password", password);

  try {
    const response = await axios({
      url: USERS_URL,
      method: POST,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (!response) return { success: false, message: SERVER_ERROR };

    const data = response.data;
    const user = {
      token: data.token,
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
    };

    return { success: true, user };
  } catch (error) {
    if (!error.response) return { success: false, message: SERVER_ERROR };

    const errorResponse = error.response;

    return { success: false, message: errorResponse.data.message };
  }
}

async function userLogin(email, password) {
  if (!email || !password)
    return { success: false, message: INSUFFICIENT_DATA };

  try {
    const response = await axios({
      url: USERS_URL + "/login",
      method: POST,
      data: { email, password },
    });

    if (!response) return { success: false, message: SERVER_ERROR };

    const data = response.data;
    const user = {
      token: data.token,
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
    };

    return { success: true, user };
  } catch (error) {
    if (!error.response) return { success: false, message: SERVER_ERROR };

    const errorResponse = error.response;

    return { success: false, message: errorResponse.data.message };
  }
}

async function userGet(id, token) {
  if (!id || !token) return { success: false, message: SERVER_ERROR };

  try {
    const response = await axios({
      url: USERS_URL + "/" + id,
      method: GET,
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response) return { success: false, message: SERVER_ERROR };
  } catch (error) {
    if (!error.response) return { success: false, message: SERVER_ERROR };

    const errorResponse = error.response;

    return {
      success: false,
      message: errorResponse.data.message,
      unauthorized: errorResponse.status === STATUS_UNAUTHORIZED,
    };
  }
}

export { userStore, userLogin, userGet };
