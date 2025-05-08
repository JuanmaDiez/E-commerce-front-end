import axios from "axios";
import { SERVER_ERROR } from "../constants/errorMessages";
import { ORDERS_URL, POST, STATUS_UNAUTHORIZED } from "../constants/constants";
import { ORDER_SUCCESS } from "../constants/successMessages";

async function orderStore(token, cart, price) {
  if (!token || !cart || cart.length === 0 || !price)
    return { success: false, message: SERVER_ERROR };

  try {
    const response = await axios({
      url: ORDERS_URL,
      method: POST,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { products: cart, price },
    });

    if (!response) return { success: false, message: SERVER_ERROR };

    return { success: true, message: ORDER_SUCCESS };
  } catch (error) {
    if (!error.response) return { success: false, message: SERVER_ERROR };

    const errorResponse = error.response;

    return {
      success: true,
      message: errorResponse.data.message,
      unauthorized: errorResponse.status === STATUS_UNAUTHORIZED,
    };
  }
}
