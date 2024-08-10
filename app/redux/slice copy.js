import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../utils/apiService";

const initialState = {
  isLoading: false,
  isError: false,
  registerData: null,
  loginData: null,
  errorMessage: '',
  loaderState: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoaderState:(state,action)=>{
      state.loaderState = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registerData = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginData = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const {setLoaderState} = userSlice.actions;

export default userSlice.reducer;
