import React,{useState} from 'react';
// import Navbar from './components/Navbar';

export default function About() {
  return (
    <>
    {/* <Navbar title="TextAnalyzer" abtTxt="About"/> */}
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                {/* <img src='C:/Users/Dell/VS/my-app/src/img/textanalyzer.png'/> */}
            </div>
            <div className='col-md-6'>
                <p style={{color:'teal',fontSize:'20px',fontFamily:'monospace',paddingTop:'40px'}}>This Simple Text Analyzer Project is my First ReactJS Project with implementations of basic ReactJS concepts. 
                    The idea was to create a site with various unique features which could be applied to the text based on the Word Counters available on the internet with similar functionalities.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
