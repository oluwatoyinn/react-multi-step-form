import React, {useState} from 'react'
import {Typography, Grid, Paper} from '@material-ui/core'
import CustomSelect from "../CustomControls/CustomSelect";
import * as prefix from '../Prefix/Prefix'



const Register=(props)=> {
  
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

  // const classes = useStyles();
  const [values] = useState(initialState)

  // const handleChange =(e)=>{
  //   const {name, value} = e.target
  //   setValues({
  //       ...values,
  //       [name]:value
  //   })
  //   }

  return (
    <React.Fragment>
     <main >
        <Grid container direction="row" spacing={1} >
                <Paper >
                  <Typography variant="h6" gutterBottom align="center">
                                Biographical Data
                            </Typography>
                            <Grid item xs={12} sm={12} >
                              <CustomSelect 
                                name="prefix"
                                label="Prefix"
                                value={values.prefix}
                                options={prefix.initialPrefix()}
                              />
                            </Grid>
                </Paper>  
          </Grid>
     </main>
      

    </React.Fragment>
  )
}


export default Register