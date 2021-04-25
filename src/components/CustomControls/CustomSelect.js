import React from 'react'
import { FormControl, Select, MenuItem,InputLabel, FormHelperText } from '@material-ui/core'
import Axios from "axios";

export default function CustomSelect(props) {
    
    const {name, label, value, onChange, error=null, options }=props

    return (
       <FormControl 
            {...(error && {error:true})}>
           <InputLabel >{label}</InputLabel>
           <Select
                label={label}
                value ={value}
                name={name}
                onChange={onChange}>
                    <MenuItem >None</MenuItem>
                    { 
                       options.map(
                            item =>(<MenuItem key={item.id || item.code} value={item.id || item.code}> {item.initial || item.name} </MenuItem>)
                            )
                    }
           </Select>
                {error && <FormHelperText>{error}</FormHelperText>}
       </FormControl>
    )
}

