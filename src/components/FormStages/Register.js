import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {FormControl, Select, InputLabel, FormControlLabel,FormLabel,Radio, RadioGroup} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
// custom
import CustomSelect from '../CustomControls/CustomSelect'
import CustomSelect2 from '../CustomControls/CustomSelect'
import CustomForm from "../CustomControls/CustomForm";
import CustomFields from "../CustomControls/CustomFields";
import Customdatepicker from "../CustomControls/CustomDatePicker";
import * as prefix from '../Prefix/Prefix'
import Axios from 'axios'

const useStyles = makeStyles(theme=>({
  root: {
    // minWidth: 275,
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
    width:'60px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardPadding:{
      paddingTop:"30px"
  },
 
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Register =() => {

  const initialState={
    prefix:'',
    firstName:'',
    lastName:'',
    middleName:'',
    suffix:'',
    gender:'male',
    dob:'',
    pob:''
  }

  // const getCountry =()=>{
    Axios.get('https://restcountries.eu/rest/v2/all')
    .then(res=>{
      console.log(res.data[0]);
    })
  //  }


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
            <Card className={classes.root}>
                <CardContent className={classes.cardPadding}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Biographical Data
                    </Typography>
                    <CustomForm>
                        <Grid container >
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
                        </Grid>
                    </CustomForm>
                </CardContent>
                </Card>
    </Container>
  );
}

export default Register