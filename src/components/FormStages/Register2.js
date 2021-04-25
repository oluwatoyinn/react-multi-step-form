import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {FormControl, Typography,FormControlLabel,FormLabel,Radio, RadioGroup, Button, Icon} from '@material-ui/core';
// import Icon from '@material-ui/core/Icon';

import CustomForm from '../CustomControls/CustomForm'
import CustomFields from "../CustomControls/CustomFields";
import CustomButton from '../CustomControls/CustomButton'
import * as prefix from '../Prefix/Prefix'
import CustomSelect from "../CustomControls/CustomSelect";
import Customdatepicker from "../CustomControls/CustomDatePicker";
import FormStepper from "../bin/Step";
import Axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    fontSize: 20,
    padding:'40px',
    fontWeight:600
  },
  selectPadding:{
    paddingTop:'70px',
  },
  button: {
    margin: theme.spacing(1),
    float:'right'
  },
}));

export default function CenteredGrid() {

    const initialState={
        prefix:'',
        firstName:'',
        lastName:'',
        middleName:'',
        suffix:'',
        gender:'male',
        dob:'',
        pob:'',
        data:[]
      }

    const classes = useStyles();
    const [values, setValues] = useState(initialState)

    
    useEffect(()=>{
        Axios.get('https://restcountries.eu/rest/v2/all')
        .then(res=>{
            const datas = res.data
            let countryData = res.data[0]
            setValues({country:countryData.name})
            
            console.log('response from main api :', res);
            console.log('Single country :',datas);
            console.log('data: ', countryData );
            
            // const names = datas.map(country =><div>
            //     {country.name}
            // </div> )

        })
      },[])

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
                        <FormStepper />
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Biographical Data
                        </Typography>
                            <CustomForm>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <CustomSelect 
                                            name="prefix"
                                            label="Prefix"
                                            value={values.prefix}
                                            options={prefix.initialPrefix()}
                                        />
                                        <CustomFields 
                                            name="firstName"
                                            label="First Name"
                                            value={values.firstName}    
                                        />
                                        <CustomFields 
                                            name="firstName"
                                            label="Last Name"
                                            value={values.lastName}    
                                        />
                                        <CustomFields 
                                            name="firstName"
                                            label="Middle Name"
                                            value={values.middleName}    
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomSelect
                                            name="suffix"
                                            label="Suffix"
                                            value={values.suffix}
                                            options={prefix.endSuffix()}
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <FormControl >
                                        <FormLabel>Gender</FormLabel>
                                            <RadioGroup row 
                                            name="gender"
                                            value={values.gender}
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
                                            value={values.dob}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CustomSelect 
                                            name="pob"
                                            label="Place of Birth"
                                            value={values.pop}
                                            options={prefix.country()}
                                        />
                                    </Grid>
                                    <Grid xs={11} >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            endIcon={<Icon></Icon>}
                                        >
                                            Send
                                        </Button>
                                    </Grid>

                                </Grid>
                            </CustomForm>
                       
                    </CardContent>
                    
                </Card>
               
            {/* </div> */}
        </Container>
    );
  }