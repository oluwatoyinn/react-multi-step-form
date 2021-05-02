import React, {useState} from 'react'
import {makeStyles } from '@material-ui/core'
// import { Form } from '@material-ui/core'

// customform starts here
const useStyles = makeStyles(theme=>({
    root:{
       '& .MuiFormControl-root':{
           width:'100%',
           margin:theme.spacing(1)
       }
    }
}))

export default function CustomForm(props) {
    
    const classes = useStyles()
    const {children, ...others} = props
    return (
       <form className={classes.root} autoComplete="off" {...others} >
           {props.children}
       </form>
    )
}
// customform ends here
