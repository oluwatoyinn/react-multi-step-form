import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import {Typography, CircularProgress} from '@material-ui/core';
import SendShardIcon from '@material-ui/icons/SendSharp'
import Register2 from "../FormStages/Register2";
import Address from '../FormStages/Address';
import Credentials from '../FormStages/Credentials';
import ViewEntries from '../FormStages/ViewEntries';
import {StepperSchema} from "../FormValidations/ValidationSchema";
import { Formik, Form } from 'formik';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '36%',
    margin:'6rem auto',
    backgroundColor: '#ffffff',
    border:'1px solid #999',
    '& .MuiStepIcon-root.MuiStepIcon-active':{
      color:'red'
    },
    '& .MuiStepIcon-root.MuiStepIcon-completed':{
        color:'red'
    }
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title:{
      fontSize:40,
      fontWeight:600,
      margin:'1rem auto',
      textAlign:'center'
  }
}));

const steps = ['Biographical Data', 'Current Address', 'Credential Data','Review Entries'];


function getStepContent(step) {
  switch (step) {
    case 0:
      return <Register2 />;
    case 1:
      return <Address />;
    case 2:
      return <Credentials />;
    case 3:
      return <ViewEntries />
    default:
      return 'Unknown step';
  }
}

export default function FormStepper() {

  // const initialState={
  //   prefix:'',
  //   firstName:'',
  //   lastName:'',
  //   middleName:'',
  //   suffix:'',
  //   gender:'',
  //   dob:'',
  //   pob:'',
  //   credentialType:'',
  //   credentialIdNumber:'',
  //   dateOfIssue:'',
  //   dateOfExpiration:'',
  //   issuingAuthority:'',
  //   dataMeans:'',
  //   isDiscounted:false,
  //   address:'',
  //   suite:'',
  //   city:'',
  //   state:'',
  //   postalCode:'',
  //   emailAddress:'',
  // }

  // const [values, setValues] = useState(initialState)
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const currentValidationSchema =StepperSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }


  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  //   const handleNext = () => {
  //     let newSkipped = skipped;
  //     if (isStepSkipped(activeStep)) {
  //       newSkipped = new Set(newSkipped.values());
  //       newSkipped.delete(activeStep);
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped(newSkipped);
  //   };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


  return (
    <> 
      <div className={classes.root}>
              <Typography className={classes.title} color="textSecondary" >
                  Pre-Registration
              </Typography>
              <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                  return (
                    <Step key={label}>
                      <StepLabel >{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
        <div>
              {activeStep === steps.length ? (
                <div>
                    <Typography className={classes.instructions}>
                      All steps completed - you&apos;re finished
                    </Typography>
                </div>
              ) : (
                <Formik
                    initialValues= {{
                      prefix:'',
                      firstName:'',
                      lastName:'',
                      middleName:'',
                      suffix:'',
                      gender:'',
                      dob:'',
                      pob:'',
                      credentialType:'',
                      credentialIdNumber:'',
                      dateOfIssue:'',
                      dateOfExpiration:'',
                      issuingAuthority:'',
                      dataMeans:'',
                      isDiscounted:false,
                      address:'',
                      suite:'',
                      city:'',
                      state:'',
                      postalCode:'',
                      emailAddress:'',
                    }}
                    validationSchema={currentValidationSchema}
                    onSubmit={_handleSubmit}
                >
                  {({isSubmitting})=>(
                    <>
                      {getStepContent(activeStep)}
                      <div className={classes.buttons}>
                            {activeStep !== 0 && (
                            <Button 
                            onClick={handleBack} 
                            className={classes.button}
                            >
                            Back
                            </Button>
                            )}
                            <div className={classes.wrapper}>
                                <Button
                                disabled={isSubmitting}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                // endIcon={<SendShardIcon/>}
                                >
                                {isLastStep ? 'Submit' : 'Next'}
                                </Button>
                                {isSubmitting && (
                                <CircularProgress
                                    size={24}
                                    className={classes.buttonProgress}
                                />
                                )}
                            </div>
                        </div>
                    </>  
                  )}
                  {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div> */}
                </Formik>
              )}
        </div>
      </div>
    </>
  );
}


{/* <pre>{JSON.stringify(values,null,2)}</pre> */}
{/* <pre>{JSON.stringify(errors,null,2)}</pre> */}