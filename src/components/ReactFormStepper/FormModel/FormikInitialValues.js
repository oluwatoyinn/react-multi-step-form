import ReviewFormModel from "./ReviewFormModel";

const {
    formField: {
        prefix,
        firstName,
        lastName,
        middleName,
        suffix,
        gender,
        dob,
        pob,
        credentialType,
        credentialIdNumber,
        dateOfIssue,
        dateOfExpiration,
        issuingAuthority,
        dataMeans,
        isDiscounted,
        address,
        suite,
        city,
        state,
        postalCode,
        emailAddress, 
    }
  } = ReviewFormModel;
  
  export default {
    [firstName.name]: '',
    [lastName.name]: '',
    [prefix.name]: '',
    [middleName]:'',
    [suffix]:'',
    [gender]:'',
    [dob]:'',
    [pob]:'',
    [credentialType]:'',
    [credentialIdNumber]:'',
    [dateOfIssue]:'',
    [dateOfExpiration]:'',
    [issuingAuthority]:'',
    [dataMeans]:'',
    [isDiscounted]:'',
    [address]:'',
    [suite]:'',
    [city]:'',
    [state]:'',
    [postalCode]:'',
    [emailAddress]:'', 
  };
  