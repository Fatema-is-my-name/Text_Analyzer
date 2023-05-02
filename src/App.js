import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light'); //default state is light 
  const[alert, setAlert] = useState(null); //this state variable will be passed in line 31

  const showAlert =(message,type)=>{ //showAlert() function contains 2 parameters type and message which will be called in different places
    setAlert({    msg:message,
      type:type})
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  } 
  const toggleMode =() => {
    if(mode === 'light'){ //if state is light then 
      setMode('dark');    //set it to dark mode
      document.body.style.backgroundColor ='teal'; //and change bgcolor to teal
      showAlert("Dark mode has been enabled","success") // and also show an alert msg
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Dark mode has been disabled","success")
    }
  }
  return (
    <>
    <Navbar title="TextAnalyzer" abtTxt="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading = "Enter your text here" showAlert={showAlert} mode={mode}/> 
    {/* <About/> */}
    
    </div>
    </>
  );
}

export default App;
