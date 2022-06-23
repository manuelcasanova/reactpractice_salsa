import React, {useState, useEffect} from 'react';
import axios from 'axios';

import EditStepForm from './EditStepForm';

export default function NewStepList ({setRefresh}) {

  const stepsURL = 'http://localhost:8001'

  const [steps, setSteps] = useState([])

useEffect(() => {
  axios.get(`${stepsURL}/steps`)
  .then(function (res) {
    setSteps([...res.data])
  })
}, [steps])

// const deleteStep = async(id) => {
//   try {
//     const deleteStep = await fetch(`${stepsURL}delete/${id}`, {
//       method: "DELETE"
//     })
//     window.location = "/"
//   } catch (err) {
//     console.error(err.message)
//   }
// }

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
        <th>Step ID</th>
        <th>Step name</th>
        <th>Level</th>
        <th>Level ID</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>

<tbody>

{steps.map(step => 
  <tr key={step.step_id}>
    <td>{step.step_id}</td>
    <td>{step.step_title}</td>
    <td>{step.level_title}</td>
    <td>{step.level_id}</td>
    <td><EditStepForm step={step} setRefresh={setRefresh}/></td>
        <td><button onClick={() => deleteStep(step.step_id)}>Delete</button></td>
  </tr>)}
</tbody>


</table>




  )
}



// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// import Step from "./Step"

// export default function StepList ({setRefresh}) {
  
// const [steps, setSteps] = useState([])

// const stepsURL = 'http://localhost:8001/steps'


// //ASK IAN WHY WITH USE EFFECT THE LIST OF STEPS DOES NOT "REFRESH". WITHOUT IT, IT DOES, BUT IT DOES NOT STOP. solved with window.location = "/" in NewStepForm line 23
// useEffect(() => {
//   axios.get(stepsURL)
//     .then(function (res) {
//       setSteps([...res.data])
//     })
    
// }, [steps]) //[] , [steps]
// // const getAllSteps = async() => {
// //   try {
// //     const response = await fetch(stepsURL)
// //     const jsonData = await response.json();
// //     setSteps(jsonData)
// //   } catch (err) {
// //     console.error(err.message)
// //   }
// // }

// // useEffect(() => {
// //   getAllSteps();
// // }, [])


//   return (
//     <div>
      
//       {steps.map(step => <Step key={step.step_id} step={step} />)}
      
//     </div>
//   )

// }