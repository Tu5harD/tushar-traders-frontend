import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    idusers: {},
    deleteuser:{},
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload.map((user) => {
        return {
          id: user._id,
          name: user.name,
          imageurl: user.imageurl,
          weight: user.weight,
          application: user.application,
          productform: user.productform,
          packaging: user.packaging,
          dosage: user.dosage,
        };
      });
    },

    // Get data by id
    getById: (state, action) => {
      state.idusers = {
        id: action.payload._id,
        name: action.payload.name,
        imageurl: action.payload.imageurl,
        weight: action.payload.weight,
        application: action.payload.application,
        productform: action.payload.productform,
        location: action.payload.location,
        packaging: action.payload.packaging,
        dosage: action.payload.dosage,
      };
    },

    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action)=> {
      const id= action.payload.id;
      state.deleteuser = state.deleteuser.filter(u => u.id !== id)
    }
  },
});

export const { getUser, addUser, getById, deleteUser } = userSlice.actions;
export default userSlice.reducer;
