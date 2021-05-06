// import * as Yup from 'yup'
// import { moment } from "moment";
// import ReviewFormModel from "./ReviewFormModel";

// const {
//     formField: {
//         prefix,
//         firstName,
//         lastName,
//         middleName,
//         suffix,
//         gender,
//         dob,
//         pob,
//         credentialType,
//         credentialIdNumber,
//         dateOfIssue,
//         dateOfExpiration,
//         issuingAuthority,
//         dataMeans,
//         isDiscounted,
//         address,
//         suite,
//         city,
//         state,
//         postalCode,
//         emailAddress, 
//     }
//   } = ReviewFormModel;

// export const StepperSchema =[
//     Yup.object().shape({
//             prefix: Yup.string().required('Prefix is required'),
//             firstName: Yup.string().required("First Name is a required field"),
//             lastName: Yup.string().required("Last Name is a required field"),
//             middleName: Yup.string().required("Middle Name is a required field"),
//             suffix: Yup.string().required("Suffix is required"),
//             gender: Yup.string().required("Gender is required"),
//             dateOfBirth: Yup.string().required("Date of Birth is required"),
//             placeOfBirth: Yup.string().required("Place of Birth is required")
//     }),
//     Yup.object().shape({
//             address: Yup.string().required("Address is a required fields"),
//             suite: Yup.string().required("Apt/Suite is a required fields"),
//             city: Yup.string().required("City is a required fields"),
//             state: Yup.string().required("State/Province is a required fields"),
//             postalCode: Yup.string().required("Postal Code is required"),
//             emailAddress: Yup.string().required("Email Address is a required field")
//                 .email("Invalid email address"),
//       }),
//     Yup.object().shape({
//             credentialType: Yup.string().required("Credential Type is required"),
//             credentialIdNumber: Yup.string().required("Credential Number is required"),
//             dateOfIssue: Yup.string().required("Date of issue is required"),
//             dateOfExpiration: Yup.string().required("Date of Expiration is required"),
//             issuingAuthority: Yup.string().required("Please include issuing authority"),
//             dataMeans: Yup.string().required("Missing fields"),
//       }),
// ]