import React, {useState, useEffect} from 'react';
import axios from 'axios';

import EditStepForm from './EditStepForm';

export default function NewStepList ({refresh, setRefresh}) {

  const stepsURL = 'http://localhost:8001'

  const [steps, setSteps] = useState([])

useEffect(() => {
  axios.get(`${stepsURL}/steps`)
  .then(function (res) {
    setSteps([...res.data])
  })
}, [refresh]) 

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
    <td><EditStepForm step={step} refresh={refresh} setRefresh={setRefresh}/></td>
        <td><button className="Button_Delete" onClick={() => deleteStep(step.step_id)}>Delete</button></td>
  </tr>)}
</tbody>


</table>




  )
}

