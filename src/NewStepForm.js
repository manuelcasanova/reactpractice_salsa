import React, { useState } from "react";

export default function NewStepForm(props) {

const [title, setTitle] = useState("");
const [level, setLevel] = useState("");

function changeStep(e) {
  setTitle(e.target.value);
}

function onSubmit(e) {
  e.preventDefault();
  const step = {
    id: props.getNextId(),
    title,
    level
  }
  props.addStep(step);
}

// function resetForm() {
//   setTitle("");
//   setLevel("");
// }

  return(<form onSubmit={onSubmit}>
    <label htmlFor="title">Step</label>
    <input type="text" name="title" value={title} onChange={changeStep}/>
    <p></p>
    <label htmlFor="level">Level</label>
    <input type="text" name="level" value={level} onChange={e => setLevel(e.target.value)}/>
    <p></p>
    <button type="Submit" /*onClick={resetForm} value="Reset"*/>Submit</button>
    <p></p>
  </form>);
}