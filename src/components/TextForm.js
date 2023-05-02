import React, {useState} from 'react'
import { LoremIpsum } from "lorem-ipsum";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");

    }

    const TitleCase = ()=>{
        let newText = text.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
        setText(newText);
        props.showAlert("Converted to Titlecase","success");

      }
      const handleAltClick = () => {
        let newText = text.split('').map((c, i) =>
            i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
        ).join('');
        setText(newText);
        props.showAlert("Converted to Alternate case","success");

    }
      
    const readTxt = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            setText(event.target.result);
        };
        reader.readAsText(file);
        props.showAlert("File Read","success");

    }
    const copyText = () => {
        // navigator interface to copy the whole text
        navigator.clipboard.writeText(text)
        // .then(() => {
        //     console.log(text + " copied ");
        //   })
        //   .catch((error) => {
        //     console.error('Error copying text: ', error);
        //   });
        props.showAlert("Copied Text","success");

 }
    const replaceAll=()=>{
        let repval=prompt("Enter the word to be replaced:")
        let tobereplaced= new RegExp(repval,'g');
  
        let toreplace=prompt("Enter the text that you want to replace with:");
        
        let newText= text.replace(tobereplaced,toreplace);
        setText(newText);
        props.showAlert("Text Replaced","success");

      }

      const replaceString=()=>{
        let tobereplaced=prompt("Enter the word to be replaced:")
  
        let toreplace=prompt("Enter the text that you want to replace with:");
        
        let newText= text.replace(tobereplaced,toreplace);
        setText(newText);
        props.showAlert("Text Replaced","success");

      }
   
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }


    const [text ,setText] = useState("");
    const [color,setColor]=useState("black");

    const handleColor=()=>{
             let mycolor=prompt("enter your color name");
              setColor(mycolor);
             props.showAlert("Text color changed","success");
            
       }
    const handlebgcolorClick=()=>{
        let newtext=prompt("enter your bg color");
        document.body.style.backgroundColor =newtext;
        props.showAlert("Backgorund color changed","success");

      }

    //   prerequisite - npm i lorem-ipsum and import LoremIpsum hook
      const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      });

      const handleLorem = () =>{
        // let para=prompt("enter number of paragraphs to add");
      setText(lorem.generateParagraphs(4));
      props.showAlert("Dummy Text added","success");
      }

  return (
    <>
    <div className='container ' style={{paddingTop:'20px',color: props.mode==='dark' ? 'white' : 'black'}}>
      <h2 >{props.heading}</h2>
       
      <div className="mb-3">
  <textarea className="form-control" value={text}  style={{color:color}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className='btn btn-secondary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-secondary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
  <button className='btn btn-secondary mx-1' onClick={TitleCase}>Convert to Titlecase</button>
  <button className='btn btn-secondary mx-1' onClick={handleAltClick}>Convert to Alternate case</button>
  <button className='btn btn-secondary mx-1' onClick={copyText}>Copy </button>
  <button className='btn btn-secondary mx-1' onClick={replaceString}>Replace </button>
  <button className='btn btn-secondary mx-1' onClick={replaceAll}>Replace All</button>
  <button className='btn btn-secondary mx-1' onClick={handleColor}>Change Color</button>
  <button className='btn btn-secondary mx-1' onClick={handlebgcolorClick}>Change Background Color</button>
  <button className='btn btn-secondary mx-1' onClick={handleLorem}>Add dummy text</button>

  <input type="file" className="btn btn-secondary my-3" accept="text/plain" onChange = {readTxt}/>
  <button className='btn btn-secondary mx-1' onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className='container my-3' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h3>Text Summary</h3>
        {/* To avoid empty string, new lines, spaces in counting words and char use this */}
        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words and {text.trim().length} characters</p>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        
    </div>
    </>
  )
}
