import { createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for registration
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ firstName, lastName, nickName, email, password }, { rejectWithValue }) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append(
        'Cookie',
        '_wp_session=857643d9c4b881acd662479448a7d23c%7C%7C1722346175%7C%7C1722345815; wordpress_logged_in_5e54a867e95acee0f13e46880f4336b5=fghfhgfcfgsssfg%7C1723553979%7C1723553979%7Cbf027ad1212d6e5ef4f7d7132ffad2aa9f4ee9eef27c328885798c61e3e48f1d',
      );

      const formdata = new FormData();
      formdata.append('email', email);
      formdata.append('password', password);
      formdata.append('firstname', firstName);
      formdata.append('lastname', lastName);
      formdata.append('nickname', nickName);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      const response = await fetch(
        'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/register',
        requestOptions,
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Async thunk for login
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append(
        'Cookie',
        'wordpress_logged_in_5e54a867e95acee0f13e46880f4336b5=fghfhgfcfgsssfg%7C1723553979%7C1723553979%7Cbf027ad1212d6e5ef4f7d7132ffad2aa9f4ee9eef27c328885798c61e3e48f1d',
      );

      const formdata = new FormData();
      formdata.append('username', email);
      formdata.append('password', password);
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      const response = await fetch(
        'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/login',
        requestOptions,
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
