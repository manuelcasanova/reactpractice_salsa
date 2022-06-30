import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function NewStepForm({level, setLevel, step, setStep}) {

  const [title, setTitle] = useState("");
    //variable to hold the levels
    const [levels, setLevels] = useState("Beginner")
    const [steps, setSteps] = useState();
    

    useEffect(() => {
      axios.get(`${stepsURL}/levels`)
      .then(function (res) {
        setLevels([...res.data])
      })
    }, []) 

    useEffect(() => {
      axios.get(`${stepsURL}/steps`)
      .then(function (res) {
        setSteps([...steps, step])
      })
    }, []) 
    

  const stepsURL = 'http://localhost:8001'

  function addStep(step) {
    //Shows in console
    console.log("Step added:", step)
  
    return axios.post(`${stepsURL}/steps`,
      step) //payload (see inspect)
      .then(() => {
        setStep([step])
      })
  } 
  console.log("steps after add step", steps)

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
    setLevel(step.level) //Variable level is going to be the name of the last level we add
    //console.log("State of variable 'LEVEL' after adding new step: ", level)
  }

  function resetForm() {
    setTitle("");
    setLevel(level); //The default value of the input form for level is the last one used.
  }

  return (
    <div>

{/* <!-- Button trigger modal --> */}
<button type="button" className="fa-solid fa-circle-plus circle-plus" data-toggle="modal" data-target="#exampleModal">
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add new step</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      <label className="add_step_title" htmlFor="title">Step</label>

      <input className="form-control" type="text" name="title" value={title} onChange={changeStep}/>
    <p></p>

    <div className="level_input">
    
      <label className="add_step_title" htmlFor="title">Level</label>
      <select className="form-control" value={level} onChange={e => setLevel(e.target.value)} >
        {/* {Try to get these from the db so if we create more levels they appear automatically} */}
 
        {/* {levels.map(level => 
          <option>key={level.id} {level.title}</option>
 )} */}

        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Intermediate 2</option>
        <option>Advanced</option>
        <option>Advanced 2</option>
        <option>Hardcore</option>




      </select>


    </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="Button_Close" data-dismiss="modal">Close</button>
        {/* <button type="button" className="btn btn-primary">Save</button> */}
        <button 
        className="Button_Submit" 
        type="Submit"
        onClick={onSubmit} 
        /*to close modal after submission */ 
        data-dismiss="modal"
        >Add step</button>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}