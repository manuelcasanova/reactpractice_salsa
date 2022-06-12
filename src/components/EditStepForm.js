import React, { useState } from "react";

import Level from "./Level.js"

export default function NewStepForm(props) {

const [title, setTitle] = useState("");
const [level, setLevel] = useState("");

function changeStep(e) {
  setTitle(e.target.value);
}

function onSubmit(e) {
  e.preventDefault();
  const step = {
    // id: props.getNextId(),
    title,
    level
  }
  // console.log(step)
  props.addStep(step);
  resetForm();
}

function resetForm() {
  setTitle("");
  setLevel("");
}

  return(<form onSubmit={onSubmit}>
    <label htmlFor="title">Step</label>
    <input type="text" name="title" value={title} onChange={changeStep}/>
    <p></p>
      <Level />
    <p></p>
    <button type="Submit">Add step</button>
    <p></p>
  </form>);
}