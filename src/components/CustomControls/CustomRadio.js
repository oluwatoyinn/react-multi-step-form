import React from 'react'
// import { useField } from 'formik';
import {
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
  } from '@material-ui/core';

const CustomRadio = (props) => {
    const { label,data,name, options, ...rest } = props;
    // const [field, meta, ] = useField(props);
    // const { value: selectedValue } = field;


//   const handleChange =(e)=>{
//     const {name, value} = e.target
//     setValues({
//         ...values,
//         [name]:value
//     })
//     }

    return (
        <>
            <FormControl component="fieldset" {...rest}  >
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup row aria-label={name}   >
                    {options.map
                        (item=>( <FormControlLabel key={item.id} value={item.initial}  control={<Radio color="primary" />}> {item.initial}</FormControlLabel>
                    ))}
                    
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default CustomRadio
