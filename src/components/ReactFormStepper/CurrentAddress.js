import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {FormControl, Typography,FormControlLabel,FormLabel,Radio, RadioGroup, Button, Icon} from '@material-ui/core';

import CustomForm from '../CustomControls/CustomForm'
import CustomFields from "../CustomControls/CustomFields";



const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 27,
    textAlign:'center',
    fontWeight:600
  },
 
}));

export default function CurrentAddress() {

    const initialState={
        address:'',
        suite:'',
        city:'',
        state:'',
        postalCode:'',
        emailAddress:'',
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
                            Current Address
                        </Typography>
                            <CustomForm>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <CustomFields 
                                            name="address"
                                            label="Address"
                                            value={values.address} 
                                            onChange={handleChange}
                                        />
                                        <CustomFields 
                                            name="suite"
                                            label="App/Suite"
                                            value={values.suite}
                                            onChange={handleChange}
                                        />
                                        <CustomFields 
                                            name="city"
                                            label="City"
                                            value={values.city} 
                                            onChange={handleChange}
                                        />
                                         <CustomFields 
                                            name="state"
                                            label="State/Province"
                                            value={values.state}  
                                            onChange={handleChange}
                                        />
                                         <CustomFields 
                                            name="postalCode"
                                            label="Postal Code"
                                            value={values.postalCode}
                                            onChange={handleChange}
                                        />
                                         <CustomFields 
                                            name="emailAddress"
                                            label="Email Address"
                                            value={values.emailAddress} 
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