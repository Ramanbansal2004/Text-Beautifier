import React, {useState} from 'react'

export default function TextCon(props) {
    const [text, setText] = useState('');
    const handleupclick = () => {
        console.log("Clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleloclick = () => {
        console.log("Clicked");
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handlecpyclick = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied", "Success");
    }
    const handlechange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const handleclear = () => {
        setText("")
    }
  return (
    <>
    <div className="container mt-2" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#184A9C':'white', color: props.mode==='light'?'black':'white'}} value={text} onChange={handlechange} id="textBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecpyclick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length===0?"No text to preview":text}</p>
     </div>
    </>
  )
}
