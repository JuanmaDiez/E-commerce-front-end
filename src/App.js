import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShoppingCart from "./pages/ShoppingCart";
import AllProducts from "./pages/AllProducts";
import AboutUs from "./pages/AboutUs";
import SingleProduct from "./pages/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";
import Category from "./pages/Category";
import Payments from "./pages/Payments";
import UserOrders from "./pages/UserOrders";
import PublicRoute from "./protectedRoutes/PublicRoute";
import PrivateRoute from "./protectedRoutes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route
          path="/payments"
          element={
            <PrivateRoute>
              <Payments />
            </PrivateRoute>
          }
        />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <UserOrders />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
