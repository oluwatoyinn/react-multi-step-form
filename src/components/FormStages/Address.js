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
  root: {
    flexGrow: 1,
    // paddingBottom:'60px',
    '& .MuiGrid-grid-xs-6':{
        padding:'0px 54px',
        // paddingRight:'51px'
    },
    '& .MuiContainer-root':{
        paddingTop:'30px'
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 27,
    // padding:'40px',
    textAlign:'center',
    fontWeight:600
  },
  button: {
    margin: theme.spacing(1),
    float:'right'
  },
}));

export default function Address() {

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
        <Container maxWidth="md">
            {/* <div className={classes.root}> */}
                <Card className={classes.root}>
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
                                        />
                                        <CustomFields 
                                            name="suite"
                                            label="App/Suite"
                                            value={values.suite}    
                                        />
                                        <CustomFields 
                                            name="city"
                                            label="City"
                                            value={values.city}    
                                        />
                                         <CustomFields 
                                            name="state"
                                            label="State/Province"
                                            value={values.state}    
                                        />
                                         <CustomFields 
                                            name="postalCode"
                                            label="Postal Code"
                                            value={values.postalCode}    
                                        />
                                         <CustomFields 
                                            name="emailAddress"
                                            label="Email Address"
                                            value={values.emailAddress}    
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