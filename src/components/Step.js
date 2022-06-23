// import axios from 'axios';
// import { useState, useEffect } from 'react';
// // import {useNavigate} from "react-router-dom"

// import EditStepForm from './EditStepForm';
  
// const stepsURL = 'http://localhost:8001/'

// export default function Step({step, setRefresh}) {

//   const [steps, setSteps] = useState("")

//   // let navigate = useNavigate();

//   const deleteStep = async(id) => {
//     try {
//       const deleteStep = await fetch(`${stepsURL}delete/${id}`, {
//         method: "DELETE"
//       })
//       window.location = "/"
//     } catch (err) {
//       console.error(err.message)
//     }
//   }

//   // function deleteStep(stepId) {
//   //   return axios.delete(`${stepsURL}delete/${stepId}`)
//   //     .then(res => {
//   //       setSteps(steps.filter(step => step.step_id !== stepId))
//   //       return re
//   //     })
//   // } //ASK IAN

//   return (
//     <div>

// <table className="table">
// <thead>
//       <tr>
//         <th>Step ID</th>
//         <th>Step name</th>
//         <th>Level</th>
//         <th>Level ID</th>
//         <th>Edit</th>
//         <th>Delete</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>{step.step_id}</td>
//         <td>{step.step_title}</td>
//         <td>{step.level_title}</td>
//         <td>{step.level_id}</td>
//         <td><EditStepForm step={step} setRefresh={setRefresh}/></td>
//         <td><button onClick={() => deleteStep(step.step_id)}>Delete</button></td>
//       </tr>

//     </tbody>
//   </table>

// {/* 
//       step.step_title, etc. come from the names given in the query getAllSteps
//       Step Id: {step.step_id} - Name: {step.step_title} - Level: {step.level_title} Level Id: {step.level_id} */}
//       {/* <button onClick={() => navigate(`/steps/edit/${step.step_id}`)}>Edit</button> */}
//       {/* <button>Edit</ button> */}
//       {/* <EditStepForm step={step}/>
//       <button onClick={() => deleteStep(step.step_id)}>Delete</button> */}


//     </div>
//   )
// }