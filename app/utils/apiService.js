// import {createAsyncThunk} from '@reduxjs/toolkit';
// import apiUrls from './apiUrls';
// import {PostResponse,GetResponse} from './apiNetwork';
// import {Alert} from 'react-native';
// import {setIsLoading, setLearnDashCourses ,setHomeData, setFreeCourses, setFeaturedCourses, setTermsAndCondition, setPrivacyPolicy, setHelpAssistance, setRefundPolicy, logout, setLoginData} from '../redux/slice';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// // Async thunk for registration
// export const registerUser = createAsyncThunk(
//   'user/registerUser',
//   async (
//     {firstName, lastName, nickName, email, password},
//     {rejectWithValue},
//   ) => {
//     try {
//       const myHeaders = new Headers();
//       myHeaders.append('Accept', 'application/json');
//       myHeaders.append(
//         'Cookie',
//         '_wp_session=857643d9c4b881acd662479448a7d23c%7C%7C1722346175%7C%7C1722345815; wordpress_logged_in_5e54a867e95acee0f13e46880f4336b5=fghfhgfcfgsssfg%7C1723553979%7C1723553979%7Cbf027ad1212d6e5ef4f7d7132ffad2aa9f4ee9eef27c328885798c61e3e48f1d',
//       );

//       const formdata = new FormData();
//       formdata.append('email', email);
//       formdata.append('password', password);
//       formdata.append('firstname', firstName);
//       formdata.append('lastname', lastName);
//       formdata.append('nickname', nickName);

//       const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: formdata,
//         redirect: 'follow',
//       };

//       const response = await fetch(
//         'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/register',
//         requestOptions,
//       );
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

// // Async thunk for login
// export const loginUser = createAsyncThunk(
//   'user/loginUser',
//   async ({email, password}, {rejectWithValue}) => {
//     try {
//       const myHeaders = new Headers();
//       myHeaders.append('Accept', 'application/json');
//       myHeaders.append(
//         'Cookie',
//         'wordpress_logged_in_5e54a867e95acee0f13e46880f4336b5=fghfhgfcfgsssfg%7C1723553979%7C1723553979%7Cbf027ad1212d6e5ef4f7d7132ffad2aa9f4ee9eef27c328885798c61e3e48f1d',
//       );

//       const formdata = new FormData();
//       formdata.append('username', email);
//       formdata.append('password', password);
//       const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: formdata,
//         redirect: 'follow',
//       };

//       const response = await fetch(
//         'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/login',
//         requestOptions,
//       );
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

// export const LoginApi = async (email, password, dispatch, callBack) => {
//   const url = apiUrls.login;
//   dispatch(setIsLoading(true));
//   const formdata = new FormData();
//   formdata.append('username', email);
//   formdata.append('password', password);
//   console.log('Login api Cred.', JSON.stringify(formdata), 'url', url);
//   await PostResponse(url, formdata, (response, error) => {
//     console.log(response, error);
//     if (response != null && response.status == 'true') {
//       dispatch(setIsLoading(false));
//       dispatch(setLoginData(response.data.user))
//       callBack(response, true);
//     } else if (response != null && response.status == 'false') {
//       dispatch(setIsLoading(false));
//       Alert.alert(`Login Failed: ${response.http_status}`, response.message);
//       callBack(null, false);
//     } else {
//       dispatch(setIsLoading(false));
//       Alert.alert('Login Failed', error);
//       callBack(null, false);
//     }
//   });
// };

// export const RegisterApi = async (
//   firstName,
//   lastName,
//   nickName,
//   email,
//   password,
//   dispatch,
//   callBack,
// ) => {
//   const url = apiUrls.register;
//   dispatch(setIsLoading(true));
//   const formdata = new FormData();
//   formdata.append('email', email);
//   formdata.append('password', password);
//   formdata.append('firstname', firstName);
//   formdata.append('lastname', lastName);
//   formdata.append('nickname', nickName);
//   console.log('Register api Cred.', JSON.stringify(formdata), 'url', url);
//   await PostResponse(url, formdata, (response, error) => {
//     console.log(response, error);
//     if (response != null && response.status == 'true') {
//       dispatch(setIsLoading(false));
//       callBack(response, true);
//     } else if (response != null && response.status == 'false') {
//       dispatch(setIsLoading(false));
//       Alert.alert(`Register Failed: ${response.http_status}`, response.message);
//       callBack(null, false);
//     } else {
//       dispatch(setIsLoading(false));
//       Alert.alert('Register Failed', error);
//       callBack(null, false);
//     }
//   });
// };

// export const ActivationApi = async (userId, key, dispatch, callBack) => {
//   const url = apiUrls.activate_account;
//   dispatch(setIsLoading(true));
//   const formdata = new FormData();
//   formdata.append('user_id', userId);
//   formdata.append('key', key);
//   console.log('Activation api Cred.', JSON.stringify(formdata), 'url', url);
//   await PostResponse(url, formdata, (response, error) => {
//     console.log(response, error);
//     if (response != null && response.status == 'true') {
//       dispatch(setIsLoading(false));
//       callBack(response, true);
//     } else if (response != null && response.status == 'false') {
//       dispatch(setIsLoading(false));
//       Alert.alert(
//         `Activation Failed: ${response.http_status}`,
//         response.message,
//       );
//       callBack(null, false);
//     } else {
//       dispatch(setIsLoading(false));
//       Alert.alert('Activation Failed', error);
//       callBack(null, false);
//     }
//   });
// };

// export const ForgotApi = async (email, dispatch, callBack) => {
//   const url = apiUrls.forgot_password;
//   dispatch(setIsLoading(true));
//   const formdata = new FormData();
//   formdata.append('email', email);
//   console.log('Forgot api Cred.', JSON.stringify(formdata), 'url', url);
//   await PostResponse(url, formdata, (response, error) => {
//     console.log(response, error);
//     if (response != null && response.status == 'true') {
//       dispatch(setIsLoading(false));
//       callBack(response, true);
//     } else if (response != null && response.status == 'false') {
//       dispatch(setIsLoading(false));
//       Alert.alert(`Forgot Failed: ${response.http_status}`, response.message);
//       callBack(null, false);
//     } else {
//       dispatch(setIsLoading(false));
//       Alert.alert('Forgot Failed', error);
//       callBack(null, false);
//     }
//   });
// };

// export const ResetApi = async (userId, key, password, dispatch, callBack) => {
//   const url = apiUrls.reset_password;
//   dispatch(setIsLoading(true));
//   const formdata = new FormData();
//   formdata.append('user_id', userId);
//   formdata.append('key', key);
//   formdata.append('new_password', password);
//   console.log('Reset api Cred.', JSON.stringify(formdata), 'url', url);
//   await PostResponse(url, formdata, (response, error) => {
//     console.log(response, error);
//     if (response != null && response.status == 'true') {
//       dispatch(setIsLoading(false));
//       callBack(response, true);
//     } else if (response != null && response.status == 'false') {
//       dispatch(setIsLoading(false));
//       Alert.alert(`Reset Failed: ${response.http_status}`, response.message);
//       callBack(null, false);
//     } else {
//       dispatch(setIsLoading(false));
//       Alert.alert('Reset Failed', error);
//       callBack(null, false);
//     }
//   });
// };

// export const LogoutApi = async (dispatch) => {
//   const url = "https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/logout";
//   dispatch(setIsLoading(true));
//   const formdata = new FormData();
//   formdata.append('user_id', userId);
//   formdata.append('token', token);
//   await PostResponse(url, formdata, (response, error) => {
//     console.log(response, error);
//     if (response != null && response.status == 'true') {
//       dispatch(setIsLoading(false));
//       callBack(response, true);
//     } else if (response != null && response.status == 'false') {
//       dispatch(setIsLoading(false));
//       Alert.alert(`Logout Failed: ${response.http_status}`, response.message);
//       callBack(null, false);
//     } else {
//       dispatch(setIsLoading(false));
//       Alert.alert('Logout Failed', error);
//       callBack(null, false);
//     }
//   });
// };

// export const LearnDashCoursesApi = async (dispatch, callBack) => {
//   const url = apiUrls.learndash_courses;
//   dispatch(setIsLoading(true));
//   const formdata = new FormData();
//   console.log('LearnDashCoursesApi api Cred.', JSON.stringify(formdata), 'url', url);
//   await PostResponse(url, formdata, (response, error) => {
//     console.log(response, error);
//     if (response != null && response.status == 'true') {
//       dispatch(setLearnDashCourses(response.data));
//       dispatch(setIsLoading(false));
//       callBack(response, true);
//     } else if (response != null && response.status == 'false') {
//       dispatch(setIsLoading(false));
//       Alert.alert(`LearnDashCoursesApi Failed: ${response.http_status}`, response.message);
//       callBack(null, false);
//     } else {
//       dispatch(setIsLoading(false));
//       Alert.alert('LearnDashCoursesApi Failed', error);
//       callBack(null, false);
//     }
//   });
// };


// export const HomePageApi = async (dispatch) => {
//   const formdata = new FormData();

//   try {
//     dispatch(setIsLoading(true))
//     const response = await axios.post(
//       'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/homepage',
//       formdata
//     );
//     dispatch(setHomeData(response.data.sections));
//     dispatch(setIsLoading(false))
//   } catch (error) {
//     console.error('Error fetching home page data:', error);
//   }
// };


// export const freeCoursesApi = async (dispatch) =>{
//   const formdata = new FormData();

//   try {
//     const response = await axios.post(
//       'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/meditation',
//       formdata
//     );
//     dispatch(setFreeCourses(response.data.sections));
//   } catch (error) {
//     console.error('Error fetching freeCoursesApi:', error);
//   }
// };


// export const featuredCoursesApi = async (dispatch) =>{
//   const formdata = new FormData();
//   try {
//     const response = await axios.post(
//       'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/golden_mindset',
//       formdata
//     );
//     dispatch(setFeaturedCourses(response.data.sections));
//   } catch (error) {
//     console.error('Error fetching featuredCoursesApi:', error);
//   }
// };



// export const termsAndConditionApi = async (dispatch) =>{
//   const formdata = new FormData();

//   try {
//     const response = await axios.post(
//       'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/terms_of_service',
//       formdata
//     );
//     dispatch(setTermsAndCondition(response.data.data.sections));
//   } catch (error) {
//     console.error('Error fetching termsAndConditionApi:', error);
//   }
// };



// export const PrivacyPolicyApi = async (dispatch) =>{
//   const formdata = new FormData();

//   try {
//     const response = await axios.post(
//       'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/privacy_policy',
//       formdata
//     );
//     dispatch(setPrivacyPolicy(response.data.sections));
//   } catch (error) {
//     console.error('Error fetching PrivacyPolicyApi:', error);
//   }
// };


// export const HelpAssistanceApi = async (dispatch) =>{
//   const formdata = new FormData();

//   try {
//     const response = await axios.post(
//       'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/help_assistance',
//       formdata
//     );
//     dispatch(setHelpAssistance(response.data.data.sections));
//   } catch (error) {
//     console.error('Error fetching HelpAssistanceApi:', error);
//   }
// };


// export const RefundPolicyApi = async (dispatch) =>{
//   const formdata = new FormData();

//   try {
//     const response = await axios.post(
//       'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/refund_policy',
//       formdata
//     );
//     dispatch(setRefundPolicy(response.data.data.sections));
//   } catch (error) {
//     console.error('Error fetching RefundPolicyApi:', error);
//   }
// };




import {createAsyncThunk} from '@reduxjs/toolkit';
import apiUrls from './apiUrls';
import {PostResponse, GetResponse} from './apiNetwork';
import {Alert} from 'react-native';
import {
  setIsLoading,
  setLearnDashCourses,
  setHomeData,
  setFreeCourses,
  setFeaturedCourses,
  setTermsAndCondition,
  setPrivacyPolicy,
  setHelpAssistance,
  setRefundPolicy,
  logout,
  setLoginData,
  setProfileData,
  setUpdateProfileData,
} from '../redux/slice';
import axios from 'axios';
import {getToken, getUserDetails} from '../localStorage/userStorage';
import {useDispatch} from 'react-redux';
// Async thunk for registration
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (
    {firstName, lastName, nickName, email, password},
    {rejectWithValue},
  ) => {
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
  async ({email, password}, {rejectWithValue}) => {
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

export const LoginApi = async (email, password, dispatch, callBack) => {
  const url = apiUrls.login;
  dispatch(setIsLoading(true));
  const formdata = new FormData();
  formdata.append('username', email);
  formdata.append('password', password);
  console.log('Login api Cred.', JSON.stringify(formdata), 'url', url);
  await PostResponse(url, formdata, (response, error) => {
    console.log(response, error);
    if (response != null && response.status == 'true') {
      dispatch(setIsLoading(false));
      dispatch(setLoginData(response.data.user));
      callBack(response, true);
    } else if (response != null && response.status == 'false') {
      dispatch(setIsLoading(false));
      Alert.alert(`Login Failed: ${response.http_status}`, response.message);
      callBack(null, false);
    } else {
      dispatch(setIsLoading(false));
      Alert.alert('Login Failed', error);
      callBack(null, false);
    }
  });
};

export const RegisterApi = async (
  firstName,
  lastName,
  nickName,
  email,
  password,
  dispatch,
  callBack,
) => {
  const url = apiUrls.register;
  dispatch(setIsLoading(true));
  const formdata = new FormData();
  formdata.append('email', email);
  formdata.append('password', password);
  formdata.append('firstname', firstName);
  formdata.append('lastname', lastName);
  formdata.append('nickname', nickName);
  console.log('Register api Cred.', JSON.stringify(formdata), 'url', url);
  await PostResponse(url, formdata, (response, error) => {
    console.log(response, error);
    if (response != null && response.status == 'true') {
      dispatch(setIsLoading(false));
      callBack(response, true);
    } else if (response != null && response.status == 'false') {
      dispatch(setIsLoading(false));
      Alert.alert(`Register Failed: ${response.http_status}`, response.message);
      callBack(null, false);
    } else {
      dispatch(setIsLoading(false));
      Alert.alert('Register Failed', error);
      callBack(null, false);
    }
  });
};

export const ActivationApi = async (userId, key, dispatch, callBack) => {
  const url = apiUrls.activate_account;
  dispatch(setIsLoading(true));
  const formdata = new FormData();
  formdata.append('user_id', userId);
  formdata.append('key', key);
  console.log('Activation api Cred.', JSON.stringify(formdata), 'url', url);
  await PostResponse(url, formdata, (response, error) => {
    console.log(response, error);
    if (response != null && response.status == 'true') {
      dispatch(setIsLoading(false));
      callBack(response, true);
    } else if (response != null && response.status == 'false') {
      dispatch(setIsLoading(false));
      Alert.alert(
        `Activation Failed: ${response.http_status}`,
        response.message,
      );
      callBack(null, false);
    } else {
      dispatch(setIsLoading(false));
      Alert.alert('Activation Failed', error);
      callBack(null, false);
    }
  });
};

export const ForgotApi = async (email, dispatch, callBack) => {
  const url = apiUrls.forgot_password;
  dispatch(setIsLoading(true));
  const formdata = new FormData();
  formdata.append('email', email);
  console.log('Forgot api Cred.', JSON.stringify(formdata), 'url', url);
  await PostResponse(url, formdata, (response, error) => {
    console.log(response, error);
    if (response != null && response.status == 'true') {
      dispatch(setIsLoading(false));
      callBack(response, true);
    } else if (response != null && response.status == 'false') {
      dispatch(setIsLoading(false));
      Alert.alert(`Forgot Failed: ${response.http_status}`, response.message);
      callBack(null, false);
    } else {
      dispatch(setIsLoading(false));
      Alert.alert('Forgot Failed', error);
      callBack(null, false);
    }
  });
};

export const ResetApi = async (userId, key, password, dispatch, callBack) => {
  const url = apiUrls.reset_password;
  dispatch(setIsLoading(true));
  const formdata = new FormData();
  formdata.append('user_id', userId);
  formdata.append('key', key);
  formdata.append('new_password', password);
  console.log('Reset api Cred.', JSON.stringify(formdata), 'url', url);
  await PostResponse(url, formdata, (response, error) => {
    console.log(response, error);
    if (response != null && response.status == 'true') {
      dispatch(setIsLoading(false));
      callBack(response, true);
    } else if (response != null && response.status == 'false') {
      dispatch(setIsLoading(false));
      Alert.alert(`Reset Failed: ${response.http_status}`, response.message);
      callBack(null, false);
    } else {
      dispatch(setIsLoading(false));
      Alert.alert('Reset Failed', error);
      callBack(null, false);
    }
  });
};

export const LogoutApi = async dispatch => {
  const url =
    'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/logout';
  dispatch(setIsLoading(true));
  const formdata = new FormData();
  formdata.append('user_id', userId);
  formdata.append('token', token);

  await PostResponse(url, formdata, (response, error) => {
    console.log(response, error);
    if (response != null && response.status == 'true') {
      dispatch(setIsLoading(false));
      callBack(response, true);
    } else if (response != null && response.status == 'false') {
      dispatch(setIsLoading(false));
      Alert.alert(`Logout Failed: ${response.http_status}`, response.message);
      callBack(null, false);
    } else {
      dispatch(setIsLoading(false));
      Alert.alert('Logout Failed', error);
      callBack(null, false);
    }
  });
};

export const LearnDashCoursesApi = async (dispatch, callBack) => {
  const url = apiUrls.learndash_courses;
  dispatch(setIsLoading(true));
  const formdata = new FormData();
  console.log(
    'LearnDashCoursesApi api Cred.',
    JSON.stringify(formdata),
    'url',
    url,
  );
  await PostResponse(url, formdata, (response, error) => {
    console.log(response, error);
    if (response != null && response.status == 'true') {
      dispatch(setLearnDashCourses(response.data));
      dispatch(setIsLoading(false));
      callBack(response, true);
    } else if (response != null && response.status == 'false') {
      dispatch(setIsLoading(false));
      Alert.alert(
        `LearnDashCoursesApi Failed: ${response.http_status}`,
        response.message,
      );
      callBack(null, false);
    } else {
      dispatch(setIsLoading(false));
      Alert.alert('LearnDashCoursesApi Failed', error);
      callBack(null, false);
    }
  });
};

export const HomePageApi = async dispatch => {
  const formdata = new FormData();

  try {
    dispatch(setIsLoading(true));
    const response = await axios.post(
      'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/homepage',
      formdata,
    );
    dispatch(setHomeData(response.data.sections));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.error('Error fetching home page data:', error);
  }
};

export const freeCoursesApi = async dispatch => {
  const formdata = new FormData();

  try {
    const response = await axios.post(
      'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/meditation',
      formdata,
    );
    dispatch(setFreeCourses(response.data.sections));
  } catch (error) {
    console.error('Error fetching freeCoursesApi:', error);
  }
};

export const featuredCoursesApi = async dispatch => {
  const formdata = new FormData();
  try {
    const response = await axios.post(
      'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/golden_mindset',
      formdata,
    );
    dispatch(setFeaturedCourses(response.data.sections));
  } catch (error) {
    console.error('Error fetching featuredCoursesApi:', error);
  }
};

export const termsAndConditionApi = async dispatch => {
  const formdata = new FormData();

  try {
    const response = await axios.post(
      'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/terms_of_service',
      formdata,
    );
    dispatch(setTermsAndCondition(response.data.data.sections));
  } catch (error) {
    console.error('Error fetching termsAndConditionApi:', error);
  }
};

export const PrivacyPolicyApi = async dispatch => {
  const formdata = new FormData();

  try {
    const response = await axios.post(
      'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/privacy_policy',
      formdata,
    );
    dispatch(setPrivacyPolicy(response.data.sections));
  } catch (error) {
    console.error('Error fetching PrivacyPolicyApi:', error);
  }
};

export const HelpAssistanceApi = async dispatch => {
  const formdata = new FormData();

  try {
    const response = await axios.post(
      'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/help_assistance',
      formdata,
    );
    dispatch(setHelpAssistance(response.data.data.sections));
  } catch (error) {
    console.error('Error fetching HelpAssistanceApi:', error);
  }
};

export const RefundPolicyApi = async dispatch => {
  const formdata = new FormData();

  try {
    const response = await axios.post(
      'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/refund_policy',
      formdata,
    );
    dispatch(setRefundPolicy(response.data.data.sections));
  } catch (error) {
    console.error('Error fetching RefundPolicyApi:', error);
  }
};
export const getProfileData = async dispatch => {
  const UserData = await getUserDetails();
  const token = await getToken();

  console.log('jkadhajdadgadahd0', UserData.ID, token);
  try {
    const formData = new FormData();
    formData.append('user_id', UserData.ID);
    formData.append('token', token);

    const response = await axios.post(
      'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/profile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    dispatch(setProfileData(response.data));
    return response.data;
  } catch (error) {
    console.error('This is the error case', error);
    throw error; // Optional: you can throw the error if you want to handle it elsewhere
  }
};

export const updateUserProfile = async dispatch => {
  const UserData = await getUserDetails();
  const token = await getToken();

  console.log('get user token.................', UserData.ID, token);
  try {
    const formData = new FormData();
    formData.append('user_id', UserData.ID);
    formData.append('token', token);

    const formdata = new FormData();
    formdata.append('token', token);
    formdata.append('user_id', UserData.ID);
    formdata.append('first_name');
    formdata.append('last_name');
    formdata.append('nickname');
    formdata.append('description');
    formdata.append('email');

    const response = await axios.post(
      'https://wildflower.biznessweb.site/goldenrichacademy/wp-json/api/v1/update_profile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    dispatch(setUpdateProfileData(response.data));
    return response.data;
  } catch (error) {
    console.error('This is the error case', error);
    throw error; // Optional: you can throw the error if you want to handle it elsewhere
  }
};



