import React, { useEffect, useState } from 'react';
import './App.css';
import NewStepForm from './components/NewStepForm';
// import EditStepForm from './components/EditStepForm';
import Step from './components/Step';
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

  // function addStep(step) {
  //   // console.log(step)

  //   // setSteps([step, ...steps])
  //   console.log('steps -->', steps)
  //   return axios.post(`http://localhost:8001/steps/`,
  //   step) //payload (see inspect)
  //   .then(response => {
  //     console.log("Step added:", response.data);
  //     setSteps([...steps, response.data])
  //     console.log('response data:', response.data)
  //     return response
  //   })
  // } 

  function addStep(step) {
    // console.log(step)

    // setSteps([step, ...steps])
    console.log('steps -->', steps)
    return axios.post(`http://localhost:8001/steps/`,
      step) //payload (see inspect)
      .then(() => {
        axios.get(stepsURL)
          .then(function (res) {
            setSteps([...res.data])
          })
      })
  }

  function editStep(stepId) {
    return axios.put(`http://localhost:8001/steps/edit/${stepId}`)
      .then(response => {
        console.log("Step edited:", response.data);
        setSteps([...steps])
      })
  }

  function deleteStep(stepId) {
    return axios.delete(`http://localhost:8001/delete/${stepId}`)
      .then(res => {
        setSteps(steps.filter(step => step.step_id !== stepId))
        return res
      })
  }

  return (
    <div className="App">
      <h3>Casino (Cuban Salsa) steps</h3>
      <NewStepForm addStep={addStep} getNextId={getNextId} />
      {steps.map(step => <Step key={step.step_id} step={step} deleteStep={deleteStep} editStep={editStep} />)}

    </div>
  );
}

export default App;
