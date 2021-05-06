import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {FormControl, Typography,FormControlLabel,FormLabel,Radio, RadioGroup, Button, Icon} from '@material-ui/core';

import CustomForm from '../CustomControls/CustomForm'
import CustomFields from "../CustomControls/CustomFields";
import CustomSelect from "../CustomControls/CustomSelect";
import Customdatepicker from "../CustomControls/CustomDatePicker";
import CustomCheckBox from "../CustomControls/CustomCheckBox";
import * as prefix from '../Prefix/Prefix'


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    padding:'40px',
    fontWeight:600,
    textAlign:'center'
  }
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
        <React.Fragment>
                <Card >
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
                                            onChange={handleChange}
                                        />
                                        <CustomFields 
                                            name="credentialIdNumber"
                                            label="Credential ID Number"
                                            value={values.credentialIdNumber}  
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Customdatepicker 
                                            name="dateOfIssue"
                                            label="Date of Issue"
                                            value={values.dateOfIssue}
                                            onChange={handleChange}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Customdatepicker 
                                            name="dateOfExpiration"
                                            label="Date of Expiration"
                                            value={values.dateOfExpiration}
                                            onChange={handleChange}
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
                                </Grid>
                            </CustomForm>
                    </CardContent>
                </Card>
        </React.Fragment>
    );
  }