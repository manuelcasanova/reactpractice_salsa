import React, {useEffect, useState} from 'react';
import './App.css';
import NewStepForm from './NewStepForm';
import Step from './Step';
import axios from 'axios';

function App() {
  const [steps, setSteps] = useState([])
  const [id, setId] = useState(4);
  // const [title, setTitle] = useState("");
  // const [level, setLevel] = useState("");

  
const stepsURL = 'http://localhost:8001/steps'
// const levelsURL = 'http://localhost:8001/levels'

useEffect(() => {
  axios.get(stepsURL)
  .then(function (res) {
    setSteps([...res.data])
  })
}, [])


// useEffect(() => {
//   Promise.all([
//     axios.get(stepsURL),
//   ]).then((all) => {
//     setSteps(prev => ({...prev, steps:all[0].data}))
//   })
// }, [])

  function getNextId() {
    setId(prevId => prevId + 1)
    return id;
  }
  
  function addStep(step) {
    // console.log(step)
  
    // setSteps([step, ...steps])
    // console.log('step -->', step, 'steps -->', steps)
    return axios.post(`http://localhost:8001/steps/`,
    step) //payload (see inspect)
    .then(response => {
      console.log("Step added:", response.data);
      setSteps([...steps, response.data])
      return response
    })
  } 

  function deleteStep(stepId) {
    return axios.delete(`http://localhost:8001/delete/${stepId}`)
    .then (res => {
      setSteps(steps.filter(step => step.id !== stepId))
      return res
    })
  }

  
  return (
    <div className="App">
      <h3>Casino (Cuban Salsa) steps</h3>
      <NewStepForm addStep={addStep} getNextId={getNextId}/>
    {steps.map(step => <Step key={step.id} step={step} deleteStep={deleteStep}/>)}


    </div>
  );
}

export default App;
