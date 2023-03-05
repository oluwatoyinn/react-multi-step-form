import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {FormControl, Typography,FormControlLabel,FormLabel,Radio, RadioGroup} from '@material-ui/core';

import CustomForm from '../CustomControls/CustomForm'
import CustomFields from "../CustomControls/CustomFields";
import CustomSelect from "../CustomControls/CustomSelect";
import Customdatepicker from "../CustomControls/CustomDatePicker";
// import CustomRadio from "../CustomControls/CustomRadio";
import CustomCheckBox from "../CustomControls/CustomCheckBox";
import * as prefix from '../Prefix/Prefix'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom:'60px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 20,
    padding:'40px',
    fontWeight:600,
    textAlign:'center'
  },
  button: {
    margin: theme.spacing(1),
    float:'right'
  },
}));

export default function Credentials() {

    const initialState={
        credentialType:'',
        credentialIdNumber:'',
        dateOfIssue:'',
        dateOfExpiration:'',
        issuingAuthority:'',
        dataMeans:'',
        isDiscounted:false
      }

    const classes = useStyles();
    const [values, setValues] = useState(initialState)


    const handleChange =(e)=>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        }

    return (
        <Container maxWidth="md" className={classes.selectPadding}>
            {/* <div className={classes.root}> */}
                <Card className={classes.root}>
                    <CardContent >
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Credential Data
                        </Typography>
                            <CustomForm>
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <CustomSelect 
                                            name="credentialType"
                                            label="Reference Credential Type"
                                            value={values.credentialType}
                                            options={prefix.credentialType()}
                                        />
                                        <CustomFields 
                                            name="credentialIdNumber"
                                            label="Credential ID Number"
                                            value={values.credentialIdNumber}    
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Customdatepicker 
                                            name="dateOfIssue"
                                            label="Date of Issue"
                                            value={values.dateOfIssue}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Customdatepicker 
                                            name="dateOfExpiration"
                                            label="Date of Expiration"
                                            value={values.dateOfExpiration}
                                            fullWidth
                                        />
                                    </Grid>
                                    {/* <Grid item xs={6}>
                                        <CustomRadio 
                                            name={values.dataMeans}
                                            label="How do you want your data sent to you"
                                            value={values.dataMeans}
                                            options={prefix.dataMeans()}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid> */}
                                    <Grid item xs={6} style={{paddingTop:"10px"}} >
                                        <FormControl >
                                        <FormLabel>How do you want your data sent to you</FormLabel>
                                            <RadioGroup row 
                                            name="dataMeans"
                                            value={values.dataMeans}
                                            onChange={handleChange}>
                                            <FormControlLabel value="male" control={<Radio/>} label="Email"/>
                                            <FormControlLabel value="female" control={<Radio/>} label="SMS"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid>
                                        <CustomCheckBox
                                            name="isDiscounted"
                                            label="Do you want to have a discount offer for MyVax or for a travel and vaccination card bundle sent to you with other offers"
                                            value={values.isDiscounted}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    {/* <Grid xs={11} >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            endIcon={<Icon></Icon>}
                                        >
                                            Send
                                        </Button>
                                    </Grid> */}
                                </Grid>
                            </CustomForm>
                       
                    </CardContent>
                    
                </Card>
               
            {/* </div> */}
        </Container>
    );
  }