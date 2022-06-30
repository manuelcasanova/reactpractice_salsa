import React, {Fragment, useState, useEffect } from "react";
import axios from 'axios'

const stepsURL = 'http://localhost:8001'

const EditStepForm = ({step, level, setLevel}) => {
//  console.log("Props pased to EditStepForm component: ", step)
 console.log("Props level: ", level)
//  console.log("Props step: ", step)

const [levels, setLevels] = useState([]); //See with IAN. Solved putting []

useEffect(() => {
  axios.get(`${stepsURL}/levels`)
    .then(function (res) {
      setLevels([...res.data])
      // console.log("res.data", res.data)
    })
}, [])

 
// console.log(levels)

const [title, setTitle] = useState(step.step_title)
const [level_id, setLevel_id] = useState(step.level_id)


const updateStep = async(e) => {
  e.preventDefault();

  try {

    const body = {title, level_id }
    // const body = {title, level_id, level}
    console.log("level_id before PUT", level_id)
    console.log("body before PUT: ", body)

    if (level === "Beginner") {
      setLevel_id(1);
    } else if (level === "Intermediate") {
      setLevel_id(2);
    } else if (level === "Intermediate 2") {
      setLevel_id(3);
    } else if (level === "Advanced") {
      setLevel_id(4);
    } else if (level === "Advanced 2") {
      setLevel_id(5);
    } else if (level === "Hardcore") {
      setLevel_id(6);
    }

    const response = await fetch(`${stepsURL}/steps/edit/${step.step_id}`, { //IAN response is assigned but not used
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
    })

    // console.log("response: ",response);

    
  } catch (err) {
    console.error(err.message)
  }
}

  return <Fragment>

{/* <!-- Button to Open the Modal --> */}
<button 
className="Button_Edit" 
type="button" 
data-toggle="modal" 
data-target={`#id${step.step_id}`}

>
  Edit
</button>

{/* <!-- The Modal --> */}
<div className="modal" id={`id${step.step_id}`} 
>
  <div className="modal-dialog">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Edit step</h4>
        <button type="button" className="close" data-dismiss="modal" 
        >&times;
        </button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      <label htmlFor="title">Step</label>
        <input 
        type="text" 
        className="form-control" 
        value={title} 
        onChange={e => setTitle(e.target.value)}/>
       
        <label htmlFor="title">Level</label>
        <select 
        className="form-control" 
        value={level} //Before I have level_id and setLevel_id SEE WITH IAN
        onChange={e => setLevel(e.target.value)}
        
        > 
        

        {/* value={level_title} 
        onChange={e => setLevel_title(e.target.value)}> */}


        {/* <select value={level} onChange={e => setLevel(e.target.value)} > */}
        {/* {Try to get these from the db so if we create more levels they appear automatically} */}

        {levels.map((level) =>
                    <option key={level.id}>
                      {level.title}
                    </option>
                  )}  

       
      </select>

      </div>

      {/* <!-- Modal footer --> */}
      
      <div className="modal-footer">
      <button 
      className="Button_Close" 
      type="button" 
      data-dismiss="modal" 
      onClick = {() => setTitle(step.step_title)}
        >Close</button>
        <button 
        className="Button_Edit" 
        type="button" 
        data-dismiss="modal" 
        onClick={e => updateStep(e)}
        
        >Edit</button>

      </div>

    </div>
  </div>
</div>
  
  </Fragment>
}

export default EditStepForm;

