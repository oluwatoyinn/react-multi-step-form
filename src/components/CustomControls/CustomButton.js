import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme=>({
    root:{
        margin:theme.spacing(1)
    },
    label:{
        textTransform:"none",
    }
}))

export default function CustomButton(props) {

    const classes = useStyles()
    const {text, size, color, variant, onClick, ...other} =props 

    return (
       <Button
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{root:classes.root, label:classes.label}}
            endIcon={<Icon></Icon>}
        >{text}</Button>
    )
}
