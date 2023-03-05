import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    // Box,
    // Grid,
    Typography,
    Paper
} from '@material-ui/core';
import Data from "./Data";
import CurrentAddress from "./CurrentAddress";
import Credential from "./Credential";
import CheckEntries from "./CheckEntries";
// import FormikInitialValues from "./FormModel/FormikInitialValues";
import ReviewFormModel from "./FormModel/ReviewFormModel";
// import StepperIcons from "./StepIcons";
// import StepConnector from './StepConnector'

const style = makeStyles(theme => ({
    root: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
          width: 800,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '& .MuiStepIcon-root.MuiStepIcon-active':{
            color:'red'
          },
          '& .MuiStepIcon-root.MuiStepIcon-completed':{
              color:'red'
          }
      },
      paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
      },
      stepper: {
        padding: theme.spacing(3, 0, 5),
      },
      buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
      },
    title:{
        fontSize:40,
        fontWeight:600,
        margin:'15px',
        textAlign:"center"
    }
}));

const getSteps =() =>{
    return ['Biographical Data', 'Current Address', 'Credential Data', 'Review Entries'];
  }
  
const steps = getSteps()
const {formField, formId} = ReviewFormModel

const getStepContent=(step)=> {
    switch (step) {
      case 0:
        return <Data formField={formField} />;
      case 1:
        return <CurrentAddress />;
      case 2:
        return <Credential />;
      case 3:
        return <CheckEntries />;
      default:
        return 'Unknown step';
    }
  }

const MuiStepper = () => {

    const [activeStep, setActiveStep] = useState(0);
    const classes = style();

    const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleReset = () => setActiveStep(0);

    return <>
    <main className={classes.root}>
        <Paper className={classes.paper}>
            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                Registration
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
    </main>
        
    </>
}

export default MuiStepper;