// export default function Step({step, deleteStep, editStep}) {

//   return (
//     <div>
//       {/* step.step_title, etc. come from the names given in the query getAllSteps */}
//       Step Id: {step.step_id} - Name: {step.step_title} - Level: {step.level_title} Level Id: {step.level_id}
//       <button onClick={() => editStep(step.step_id)}>Edit</button>
//       <button onClick={() => deleteStep(step.step_id)}>Delete</button>
//     </div>
//   )
// }

import axios from 'axios';
import { useState } from 'react';
  
const stepsURL = 'http://localhost:8001/steps'

export default function Step({step, deleteStep, editStep}) {

  const [steps, setSteps] = useState("")

  function editStep(stepId) {
    return axios.put(`http://localhost:8001/steps/edit/${stepId}`)
      .then(response => {
        console.log("Step edited:", response.data);
        setSteps([...steps])
      })
  }
  
  function deleteStep(stepId) {
    return axios.delete(`http://localhost:8001/delete/${stepId}`)
      // .then(res => {
      //   setSteps(steps.filter(step => step.step_id !== stepId))
      //   return res
      // })
  } //ASK IAN

  return (
    <div>
      {/* step.step_title, etc. come from the names given in the query getAllSteps */}
      Step Id: {step.step_id} - Name: {step.step_title} - Level: {step.level_title} Level Id: {step.level_id}
      <button onClick={() => editStep(step.step_id)}>Edit</button>
      <button onClick={() => deleteStep(step.step_id)}>Delete</button>
    </div>
  )
}