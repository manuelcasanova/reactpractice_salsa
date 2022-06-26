import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function NewStepForm({refresh, setRefresh}) {

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");

  const stepsURL = 'http://localhost:8001/steps'

  function addStep(step) {
    //Shows in console
    console.log("Step added:", step)
  
    return axios.post(stepsURL,
      step) //payload (see inspect)
      .then(() => {
        setRefresh(!refresh) //HERE TO REFRESH WITH NEW DATA AFTER POSTING!!! 
      })
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
  
  
  <form className="add_step_form" onSubmit={onSubmit}>
    <p>Create a new step</p>
    <label className="add_step_title" htmlFor="title">Step</label>
    <input className="input_box" type="text" name="title" value={title} onChange={changeStep}/>
    <p></p>


    <div className="level_input">
    
      <label className="add_step_title" htmlFor="title">Level</label>
      <select className="input_box" value={level} onChange={e => setLevel(e.target.value)} >
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
    <button className="Button_Submit" type="Submit">Add step</button>
    <p></p>
  </form>);
}