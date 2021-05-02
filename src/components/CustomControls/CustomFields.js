import React from 'react'
import { TextField } from '@material-ui/core'
import { useField } from "formik";

export default function CustomInput (props){
    // const [field, meta] = useField(props);
    const {name, label, onChange, error=null, value,errorText, ...other} = props

    // function _renderHelperText() {
    //     const [touched, error] = at(meta, 'touched', 'error');
    //     if (touched && error) {
    //       return error;
    //     }
    //   }

    return(
        <TextField
            // error={meta.touched && meta.error && true}
            // helperText={_renderHelperText()}
            label={label}
            value ={value}
            name={name}
            onChange={onChange}
            // {...field}
            {...other}
        />
    )
}