import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Step from "./Step"

export default function StepList () {
  
const [steps, setSteps] = useState([])

const stepsURL = 'http://localhost:8001/steps'


//ASK IAN
// useEffect(() => {
  axios.get(stepsURL)
    .then(function (res) {
      setSteps([...res.data])
    })
// }, [])

  return (
    <div>
      {steps.map(step => <Step key={step.step_id} step={step}  />)}
      
    </div>
  )

}