import axios from "axios";
import { CATEGORIES_URL, GET } from "../constants/constants";
import { SERVER_ERROR } from "../constants/errorMessages";

async function categoriesIndex() {
  try {
    const response = await axios({
      url: CATEGORIES_URL,
      method: GET,
    });

    if (!response) return { success: false, message: SERVER_ERROR };

    const data = response.data;
    const categories = data.categories;

    return { success: true, categories };
  } catch (error) {
    if (!error.response) return { success: false, message: SERVER_ERROR };

    const errorResponse = error.response;

    return { success: false, message: errorResponse.data.message };
  }
}

async function categoryGet(name) {
  if (!name) return { success: false, message: SERVER_ERROR };

  try {
    const response = await axios({
      url: CATEGORIES_URL + "/" + name,
      method: GET,
    });

    if (!response) return { success: false, message: SERVER_ERROR };

    const data = response.data;
    const category = data.category;

    return { success: true, category };
  } catch (error) {
    if (!error.response) return { success: false, message: SERVER_ERROR };

    const errorResponse = error.response;

    return { success: false, message: errorResponse.data.message };
  }
}

export { categoriesIndex, categoryGet };
