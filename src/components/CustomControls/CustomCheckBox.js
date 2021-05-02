import React from 'react'
import { FormControlLabel, Checkbox,FormControl } from '@material-ui/core'


export default function CustomCheckBox(props){
   const {name, label, onChange, value} = props
    
   const convertToDefEventPara =(name, value) =>({
       target:{
           name:name, value
       }
   }) 
    return(
        <FormControl>
            <FormControlLabel
            control={<Checkbox 
                        name={name}
                        label={label}
                        color='primary'
                        checked={value}
                        onChange={e=>onChange(convertToDefEventPara(name, e.target.checked))}
                    />}
                    label={label}
            /> 
        </FormControl>
    )
} 