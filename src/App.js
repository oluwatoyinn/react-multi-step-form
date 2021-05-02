import React from 'react';
import './App.css';
import Register2 from "./components/FormStages/Register2";
import Address from "./components/FormStages/Address";
import Credentials from "./components/FormStages/Credentials";
import Header from "./components/Header";
import {Route} from "react-router-dom";
import StepperForm from "./components/FormStages/StepperForm";
import FormStepper from "./components/bin/Step";
import MuiStepper from "./components/ReactFormStepper/MuiStepper"

function App() {
  return (
    <div>
        <div className="App" >
          <Header />
          {/* <Route path="/home" component={StepperForm}/>
          <Route path="/" component={FormStepper} /> */}
          <Route path="/sub" component={MuiStepper} />
        </div>
    </div>
   
  );
}

export default App;
