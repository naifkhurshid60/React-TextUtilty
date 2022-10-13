// rfc-reacr function based component
import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");
    //text="hello" wrong way
    //setText("newText"); //correct way
    const handleUpClick = () => {
        // console.log("Upper case is click" + text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to Uppercase", "success");

    }
    const handleLowClick = () => {
        // console.log("Upper case is click" + text);
        let newText = text.toLowerCase();

        setText(newText);

        props.showAlert("Converted to Lowercase", "success");

    }
    const handleDelClick = () => {
        setText('');
        props.showAlert("Clear text done", "success");
    }
    const handleOnChange = (event) => { //we can use anything in place of eveent its generally parameter
        // console.log("On change")
        setText(event.target.value)

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard", "success");
    }
    const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");
    }
    return (<>

        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h2> {props.heading} </h2>

            <div className="mb-3">

                <textarea className="form-control" onChange={handleOnChange} value={text} style={{
                    backgroundColor: props.mode === 'dark' ?
                        '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'
                }}
                    id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleDelClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove exatra spaces</button>

        </div>
        <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length === 1 ? 0 : text.split(" ").length - 1} words and {text.length} charecters</p>
            <p>{0.008 * (text.split(" ").length - 1)} -Reading time</p>
            <h2>Preview</h2>
            <p> {text.length > 0 ? text : "Enter somthing to preview"} </p>

        </div>
    </>
    )
}
