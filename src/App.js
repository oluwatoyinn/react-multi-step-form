import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Header from "./components/Header";
import Register2 from "./components/Register2";
import {CssBaseline, makeStyles} from "@material-ui/core";
import FormStepper from "./components/bin/Step";

const useStyles = makeStyles(theme=>({
  root: {
    flexGrow: 1,
  },
}))

function App() {
  return (
    <div className="App" >
      <Header />
      <Register2  />
      <FormStepper />
    </div>
  );
}

export default App;
