import { createSlice } from "@reduxjs/toolkit";

interface User{
  id: number;
  firstName: string;
  lastName: string;
  active: string;
}
const initialState:User[] = [
  { id: 1,  firstName:'ram', lastName:'kumar',active:'InActive' },
  { id: 2,  firstName:'shyam', lastName:'kumar',active:'Active' },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, firstName, lastName,active } = action.payload;
      const existingUser = state.find((user) => user.id == id);
      
      if (existingUser) {
        existingUser.firstName = firstName;
        existingUser.lastName = lastName;
        existingUser.active = active;
      }
      console.log(active);
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id == id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
