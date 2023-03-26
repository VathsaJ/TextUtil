import React from "react";
import { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("")

  const handleUp = () => {
    setText(text.toUpperCase())
    props.alert("Converted to uppercase")
  }
  const handleLow = () => {
    setText(text.toLowerCase())
    props.alert("Converted to lowercase")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.alert("Successfully copied")
  }
  const handleClear = () => {
    setText("")
  }
   const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
    props.alert("Extra space cleared")
   }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const dark = {
    color : 'white',
    backgroundColor : '#121212'
  }
  const light = {
    color : 'black',
    backgroundColor : 'white'
  }

  return (
    <>
      <div className="mb-3">
        <h5 style={props.mode === 'dark'? dark:light}>{props.head}</h5>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} placeholder="Description...." style={props.mode === 'dark'? dark:light}></textarea>
      </div>

      <button type="button" className="btn btn-primary mx-1" onClick={handleUp}>To Uppercase</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleLow}>To Lowercase</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Clear Extra Space</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>

      <div className="container my-3" style={props.mode === 'dark'? dark:light}>
        <h5>Your text summery</h5>
        <p>{text.length} Charecters, {text.split(" ").length} Words, {text.split(" ").length * 0.08} Min read.</p>
      </div>
    </>
  );
}
