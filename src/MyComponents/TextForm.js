import React, {useState} from 'react'


export const TextForm = (props) => {
    
    const handleUpClick = () =>{
        console.log("Uppercase was clicked!");
        let newText =text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () =>{
        console.log("Lowercase was clicked!");
        let newtext =text.toLowerCase();
        setText(newtext);
    }

    const ClearText = () =>{
        console.log("Cleartext was clicked!");
        setText("");
    }

    const handleOnChange = (event) =>{
        console.log("On change!");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className = "container">
            <div className="mb-3">
                <h4>{props.heading}</h4>
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to UpperCase
            </button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleDownClick}>
                Convert to LowerCase
            </button>
            <button className="btn btn-primary my-2 mx-2" onClick={ClearText}>
                Clear Text
            </button>
        </div>
        <div className="container my-5">
            <h4>Your Text Summary</h4>
            <p>Your text contains {text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
