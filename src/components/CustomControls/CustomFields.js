import React from 'react'
import { TextField } from '@material-ui/core'

export default function CustomInput (props){
    const {name, label, onChange, error=null, value, ...other} = props

    return(
        <TextField
            // variant="outlined"
            label={label}
            value ={value}
            name={name}
            onChange={onChange}
            {...other}
            // {...(error && {error:true, helperText:error})}
        />
    )
}