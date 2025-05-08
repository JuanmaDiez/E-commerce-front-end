import axios from "axios";
import { GET, PRODUCTS_URL } from "../constants/constants";
import { SERVER_ERROR } from "../constants/errorMessages";

async function productIndex(featured) {
  const params = {};
  if (featured !== null) params.featured = featured;

  try {
    const response = await axios({
      url: PRODUCTS_URL,
      method: GET,
      params,
    });

    if (!response) return { success: false, message: SERVER_ERROR };

    const data = response.data;
    const products = data.products;

    return { success: true, products };
  } catch (error) {
    if (!error.response) return { success: false, message: SERVER_ERROR };

    const errorResponse = error.response;

    return { success: false, message: errorResponse.data.message };
  }
}

async function productGet(id) {
  if (!id) return { success: false, message: SERVER_ERROR };

  try {
    const response = await axios({
      url: PRODUCTS_URL + "/" + id,
      method: GET,
    });

    if (!response) return { success: false };

    const data = response.data;
    const product = data.product;

    return { success: true, product };
  } catch (error) {
    if (!error.response) return { success: false, message: SERVER_ERROR };

    const errorResponse = error.response;

    return { success: false, message: errorResponse.data.message };
  }
}

export { productIndex, productGet };
