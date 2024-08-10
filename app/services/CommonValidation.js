// import * as Yup from 'yup';

// export const ValidationSchema = Yup.object().shape({
//   firstName: Yup.string().required('First Name is required'),
//   lastName: Yup.string().required('Last Name is required'),
//   nickName: Yup.string().required('Nick Name is required'), // Adding a required rule
//   email: Yup.string().email('Invalid email format').required('Email is required'),
//   confirmEmail: Yup.string()
//     .oneOf([Yup.ref('email'), null], 'Emails must match')
//     .required('Confirm Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
// });



import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  nickName: Yup.string().required('Nick Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'), 

  // confirmEmail: Yup.string()
  //   .oneOf([Yup.ref('email'), null], 'Emails must match')
  //   .required('Confirm Email is required'),
  // password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),

  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //   .required('Confirm Password is required'),

});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const activationSchema = Yup.object().shape({
  activationKey: Yup.string().required("Activation Key is required")
})

export const ResetSchema = Yup.object().shape({
  newPassword: Yup.string().required("New Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is required")
})