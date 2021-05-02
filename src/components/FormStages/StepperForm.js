import React, {useState} from 'react'
import { Stepper,Step,StepLabel,Typography, Button, makeStyles } from "@material-ui/core";
import Register2 from "../FormStages/Register2";
import Credentials from "../FormStages/Credentials";
import Address from "../FormStages/Address";
import CustomButton from "../CustomControls/CustomButton";

const useStyles =makeStyles({
    root:{
        width:'40%',
        margin:'6rem auto',
        backgroundColor: '#f5f5f5',
        border:'1px solid #999',
        '& .MuiStepIcon-root.MuiStepIcon-active':{
            color:'red'
        },
        '& .MuiStepIcon-root.MuiStepIcon-completed':{
            color:'red'
        }
    },
    title:{
        fontSize:40,
        fontWeight:600,
        margin:'15px',
    }
})

function getSteps() {
    return ['Biographical Data', 'Current Address', 'Credential Data', 'Review Entries'];
  }
   
  const Steps = getSteps()

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Register2 />; 
      case 1:
        return <Address />;
      case 2:
        return <Credentials />;
      default:
        return 'Unknown step';
    }
  }

const StepperForm =(props) =>{

    const classes =useStyles()
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const handleNext =()=>{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    return (
        <React.Fragment>
            <div className={classes.root} boxShadow>
                <Typography className={classes.title} color="textSecondary" >
                    Pre-Registration
                </Typography>
                <Stepper activeStep={activeStep}>
                    {Steps.map(label=>(
                        <Step key={label}>
                            <StepLabel>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === Steps.length ? 'Steps completed' : (
                    <div>
                        {getStepContent(activeStep)}
                        <Button variant="contained" style={{marginRight:'8px', marginBottom:'20px', marginTop:'5px'}} color="primary" onClick={handleNext} >
                            {activeStep === Steps.length ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                )}
            </div>
        </React.Fragment>
         
    )
}

export default StepperForm