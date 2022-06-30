import React, {useState, useEffect} from 'react';
import axios from 'axios';

import EditStepForm from './EditStepForm';

export default function NewStepList ({level, setLevel, step, setStep, levels, setLevels}) {

  const stepsURL = 'http://localhost:8001'

  const [steps, setSteps] = useState([])

  // console.log("steps before useeffect", steps)

useEffect(() => {
  axios.get(`${stepsURL}/steps`)
  .then(function (res) {
    setSteps([...res.data])
    // console.log("State of variable 'LEVEL' on axios get: ", level)
    // console.log("axios get res.data:", res.data)
  })
}, [level, step]) 

function deleteStep(stepId) {
  return axios.delete(`${stepsURL}/delete/${stepId}`)
    .then(res => {
      setSteps(steps.filter(step => step.step_id !== stepId))
      //Shows in console
      console.log("Step deleted id:", stepId)
    })
    
} 

return (

<table className="table">

<thead>
      <tr>
        <th>Step name</th>
        <th>Level</th>
        {/* <th>Level ID</th> */}
        <th>Step ID</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>

<tbody>

{steps.map(step => 
  <tr key={step.step_id}>
    <td>{step.step_title}</td>
    <td>{step.level_title}</td>
    {/* <td>{step.level_id}</td> */}
    <td>{step.step_id}</td>
    <td><EditStepForm step={step} level={level} setLevel={setLevel} levels={levels} setLevels={setLevels}/></td>
        <td><button className="Button_Delete" onClick={() => deleteStep(step.step_id)}>Delete</button></td>
  </tr>)}
</tbody>


</table>




  )
}

