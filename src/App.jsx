import React, { useEffect } from "react";

import CreateData from "./components/CreateData";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../page/AdminPage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/userSlice";
import HomePage from "../page/HomePage";
import Products from "../page/Products";
import ProductDetails from "./components/Product/ProductDetails";
import ContactPage from "../page/ContactPage";
import { URL } from "./server/api";
const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${URL}/get`);
        dispatch(getUser(response.data));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/products" Component={Products} />
      <Route path="products/:id" Component={ProductDetails} />
      <Route path="/admin-page" Component={AdminPage} />
      <Route path="/admin-page/create_product" Component={CreateData} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
  );
};

export default App;
