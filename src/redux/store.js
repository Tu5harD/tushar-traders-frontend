import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer:{
    users: userReducer,
    idusers: userReducer,
    deleteuser: userReducer,
  }
})

export default store;