const API_URL = process.env.REACT_APP_API_URL;
const IMAGES_URL = process.env.REACT_APP_IMAGES_URL;

const USERS_URL = API_URL + "/users";
const PRODUCTS_URL = API_URL + "/products";
const CATEGORIES_URL = API_URL + "/categories";
const ORDERS_URL = API_URL + "/orders";

const GET = "GET";
const POST = "POST";
const PATCH = "PATCH";

const STATUS_UNAUTHORIZED = 401;

export {
  IMAGES_URL,
  USERS_URL,
  PRODUCTS_URL,
  CATEGORIES_URL,
  ORDERS_URL,
  GET,
  POST,
  PATCH,
  STATUS_UNAUTHORIZED,
};
