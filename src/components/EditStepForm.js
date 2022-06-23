import React, {Fragment, useState } from "react";

const stepsURL = 'http://localhost:8001/steps'

const EditStepForm = ({step}) => {
 //console.log(step) //to see how the props gets here!

const [title, setTitle] = useState(step.step_title)
const [level_id, setLevel_id] = useState(step.level_id)

const updateStep = async(e) => {
  e.preventDefault();
  try {
    const body = {title, level_id}
    //Shows in the console
    console.log("Step edited", body)
    const response = await fetch(`${stepsURL}/edit/${step.step_id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
      
    })
  } catch (err) {
    console.error(err.message)
  }
}

  return <Fragment>

{/* <!-- Button to Open the Modal --> */}
<button type="button" data-toggle="modal" data-target={`#id${step.step_id}`}>
  Edit
</button>

{/* <!-- The Modal --> */}
<div className="modal" id={`id${step.step_id}`} 
// onClick = {() => setTitle(step.step_title)}
>
  <div className="modal-dialog">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Edit step</h4>
        <button type="button" className="close" data-dismiss="modal" 
        // onClick = {() => setTitle(step.step_title)}
        >&times;
        </button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      <label htmlFor="title">Step</label>
        <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}
        />
        {/* <input type="text" className="form-control" value={level_id} onChange={e => setLevel_id(e.target.value)}/> */}
        <label htmlFor="title">Level</label>
        <select className="form-control" value={level_id} onChange={e => setLevel_id(e.target.value)}>


        {/* <select value={level} onChange={e => setLevel(e.target.value)} > */}
        {/* {Try to get these from the db so if we create more levels they appear automatically} */}
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Intermediate 2</option>
        <option>Advanced</option>
        <option>Advanced 2</option>
        <option>Hardcore</option>
      </select>

      </div>

      {/* <!-- Modal footer --> */}
      
      <div className="modal-footer">
        <button 
        type="button" 
        data-dismiss="modal" 
        onClick={e => updateStep(e)}
        >Edit</button>
        <button type="button" data-dismiss="modal" 
        onClick = {() => setTitle(step.step_title)}
        >Close</button>
      </div>

    </div>
  </div>
</div>
  
  </Fragment>
}

export default EditStepForm;

