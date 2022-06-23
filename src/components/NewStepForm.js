import React, { useState } from "react";
import axios from 'axios';

export default function NewStepForm({refresh}) {

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");

  const stepsURL = 'http://localhost:8001/steps'

  function addStep(step) {
    //Shows in console
    console.log("Step added:", step)
  
    return axios.post(stepsURL,
      step) //payload (see inspect)
  } 

  function changeStep(e) {
    setTitle(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const step = {
      title,
      level
    }
    // console.log(step)
    addStep(step);
    resetForm();
  }

  function resetForm() {
    setTitle("");
    setLevel(setLevel); //The default value of the input form for level is the last one used.
  }

  return (
  
  
  <form onSubmit={onSubmit}>
    <h3>Casino (Cuban Salsa) steps</h3>
    <label htmlFor="title">Step</label>
    <input type="text" name="title" value={title} onChange={changeStep} />
    <p></p>


    <div>
    
      <label htmlFor="title">Level</label>
      <select value={level} onChange={e => setLevel(e.target.value)} >
        {/* {Try to get these from the db so if we create more levels they appear automatically} */}
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Intermediate 2</option>
        <option>Advanced</option>
        <option>Advanced 2</option>
        <option>Hardcore</option>
      </select>

    </div>

    <p></p>
    <button type="Submit">Add step</button>
    <p></p>
  </form>);
}