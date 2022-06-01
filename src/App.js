import {useState} from 'react';
import './App.css';
import NewStepForm from './NewStepForm';
import Step from './Step';

function App() {
  const [steps, setSteps] = useState([{id:0, title: "Basic step", level: "Beginner"}])
  const [id, setId] = useState(1);

  function getNextId() {
    setId(prevId => prevId + 1)
    return id;
  }
  
  function addStep(step) {
    // const step = {id: 1, title: "Basic step forward and backwards", level: "Beginner"}
    setSteps(prevSteps => [...steps, step])
  }

  function removeStep(stepId) {
    setSteps(steps.filter(step => step.id !== stepId)) //Gives me a new array that contains all the elements that are not this book.
  }

  
  return (
    <div className="App">
      <h3>Casino (Cuban Salsa) steps</h3>
      <NewStepForm addStep={addStep} getNextId={getNextId}/>
    {/* {steps.map(step => (<div>Id: {step.id} - Step: {step.title} - Level: {step.level} </div>))} */}
    {/* {steps.map(step => <NewStepForm key={step.id} {...step} />)} */}
    {steps.map(step => <Step key={step.id} step={step} removeStep={removeStep}/>)}


    </div>
  );
}

export default App;
