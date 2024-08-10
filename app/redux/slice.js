// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   isLoading: false,
//   isError: false,
//   errorMessage: '',
//   registerData: null,
//   loginData: null,
//   learnDashCourses: [],
//   homeData: null,
//   freeCourses: null,
//   featuredCourses: null,
//   termsAndCondition: null,
//   privacyPolicy: null,
//   helpAssistance: null,
//   refundPolicy: null,
// };

// const slice = createSlice({
//   name: 'data',
//   initialState: initialState,
//   reducers: {
//     setIsLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     setIsError: (state, action) => {
//       state.isError = action.payload;
//     },
//     setErrorMessage: (state, action) => {
//       state.errorMessage = action.payload;
//     },
//     setRegisterData: (state, action) => {
//       state.registerData = action.payload;
//     },
//     setLoginData: (state, action) => {
//       state.loginData = action.payload;
//     },
//     setLearnDashCourses: (state, action) => {
//       state.learnDashCourses = action.payload;
//     },
//     setHomeData: (state, action) => {
//       console.log('action.payload',action.payload)
//       state.homeData = action.payload;
//     },
//     setFreeCourses: (state, action) => {
//       console.log('action.payload',action.payload)
//       state.freeCourses = action.payload;
//     },
//     setFeaturedCourses: (state, action) => {
//       console.log('action.payload',action.payload)
//       state.featuredCourses = action.payload;
//     },
//     setTermsAndCondition: (state, action) => {
//       console.log('action.payload',action.payload)
//       state.termsAndCondition = action.payload;
//     },
//     setPrivacyPolicy: (state, action) => {
//       console.log('action.payload',action.payload)
//       state.privacyPolicy = action.payload;
//     },
//     setHelpAssistance: (state, action) => {
//       console.log('action.payload',action.payload)
//       state.helpAssistance = action.payload;
//     },
//     setRefundPolicy: (state, action) => {
//       console.log('action.payload',action.payload)
//       state.refundPolicy = action.payload;
//     },
//     logout: (state) => {
//       return initialState;
//     },
//   },
// });

// export const {
//   setIsLoading,
//   setIsError,
//   setErrorMessage,
//   setRegisterData,
//   setLoginData,
//   setLearnDashCourses,
//   setHomeData,
//   setFreeCourses,
//   setFeaturedCourses,
//   setTermsAndCondition,
//   setPrivacyPolicy,
//   setHelpAssistance,
//   setRefundPolicy,
//   logout,
// } = slice.actions;

// export default slice.reducer;







import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  registerData: null,
  loginData: null,
  learnDashCourses: [],
  homeData: null,
  freeCourses: null,
  featuredCourses: null,
  termsAndCondition: null,
  privacyPolicy: null,
  helpAssistance: null,
  refundPolicy: null,
  profileData:null,
  updateProfileData:null,
};

const slice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setRegisterData: (state, action) => {
      state.registerData = action.payload;
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    setLearnDashCourses: (state, action) => {
      state.learnDashCourses = action.payload;
    },
    setHomeData: (state, action) => {
      console.log('action.payload',action.payload)
      state.homeData = action.payload;
    },
    setFreeCourses: (state, action) => {
      console.log('action.payload',action.payload)
      state.freeCourses = action.payload;
    },
    setFeaturedCourses: (state, action) => {
      console.log('action.payload',action.payload)
      state.featuredCourses = action.payload;
    },
    setTermsAndCondition: (state, action) => {
      console.log('action.payload',action.payload)
      state.termsAndCondition = action.payload;
    },
    setPrivacyPolicy: (state, action) => {
      console.log('action.payload',action.payload)
      state.privacyPolicy = action.payload;
    },
    setHelpAssistance: (state, action) => {
      console.log('action.payload',action.payload)
      state.helpAssistance = action.payload;
    },
    setRefundPolicy: (state, action) => {
      console.log('action.payload',action.payload)
      state.refundPolicy = action.payload;
    },
    setProfileData:(state,action)=>{
      console.log('action.payload',action.payload)
      state.profileData = action.payload;
    },
    setUpdateProfileData:(state,action)=>{
      console.log('action.payload',action.payload)
      state.updateProfileData = action.payload;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const {
  setIsLoading,
  setIsError,
  setErrorMessage,
  setRegisterData,
  setLoginData,
  setLearnDashCourses,
  setHomeData,
  setFreeCourses,
  setFeaturedCourses,
  setTermsAndCondition,
  setPrivacyPolicy,
  setHelpAssistance,
  setRefundPolicy,
  setProfileData,
  setUpdateProfileData,
  logout,
} = slice.actions;

export default slice.reducer;
