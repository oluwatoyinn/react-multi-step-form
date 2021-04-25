import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiToolbar-root':{
        margin:'15px',
    },
  
    '& .MuiAppBar-colorPrimary': {
        color: '#000',
        backgroundColor: '#f5f5f5'
    }
  },
}));

const Header = () =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h4" color="inherit">
            IPHARM
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header