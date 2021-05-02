import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {FormControl, Typography,FormControlLabel,FormLabel,Radio, RadioGroup, Button, Icon, makeStyles} from '@material-ui/core';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
// import Icon from '@material-ui/core/Icon';

import CustomForm from '../CustomControls/CustomForm'
import CustomFields from "../CustomControls/CustomFields";
import CustomButton from '../CustomControls/CustomButton'
import * as pre from '../Prefix/Prefix'
import CustomSelect from "../CustomControls/CustomSelect";
import Customdatepicker from "../CustomControls/CustomDatePicker";
// import Axios from 'axios'

const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: 27,
      padding:'15px',
      fontWeight:600,
      textAlign:'center'
    },
  }));

export default function Data() {

    const initialState={
        prefix:'',
        firstName:'',
        lastName:'',
        middleName:'',
        suffix:'',
        gender:'',
        dob:'',
        pob:'',
      }

      const classes = useStyles()
    const [values, setValues] = useState(initialState)
    const {prefix,firstName,lastName,middleName,suffix,gender,dob,pob} = values



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
                            Biographical Data
                        </Typography>
                            <CustomForm>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <CustomSelect 
                                            name="prefix"
                                            label="Prefix"
                                            value={prefix}
                                            options={pre.initialPrefix()}
                                            onChange={handleChange}
                                        />
                                        <CustomFields 
                                            name="firstName"
                                            label="First Name"
                                            value={firstName}    
                                        />
                                        <CustomFields 
                                            name="firstName"
                                            label="Last Name"
                                            value={lastName}    
                                        />
                                        <CustomFields 
                                            name="firstName"
                                            label="Middle Name"
                                            value={middleName}    
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomSelect
                                            name="suffix"
                                            label="Suffix"
                                            value={suffix}
                                            options={pre.endSuffix()}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <FormControl >
                                        <FormLabel>Gender</FormLabel>
                                            <RadioGroup row 
                                            name="gender"
                                            value={gender}
                                            onChange={handleChange}>
                                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Customdatepicker 
                                            name="dob"
                                            label="Date of Birth"
                                            value={dob}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomSelect 
                                            name="pob"
                                            label="Place of Birth"
                                            value={pob}
                                            onChange={handleChange}
                                            options={pre.country()}
                                        />
                                    </Grid>
                                    {/* <IntlTelInput
                                        preferredCountries={['tw']}
                                        value={pob}
                                        css={['intl-tel-input', 'form-control']}
                                        />, */}
                                </Grid>
                            </CustomForm>
                    </CardContent>
                </Card>
        </React.Fragment>
    );
  }