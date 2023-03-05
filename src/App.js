import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Route} from "react-router-dom";
import MuiStepper from "./components/ReactFormStepper/MuiStepper"

function App() {
  return (
    <div>
        <div className="App" >
          <Header />
          {/* <Route path="/home" component={StepperForm}/> */}
          {/* <Route path="/" component={FormStepper} /> */}
          <Route path="/" component={MuiStepper} />
        </div>
    </div>
   
  );
}

export default App;
