import {useState} from 'react';
import './App.css';
import NewStepForm from './NewStepForm';

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
  
  return (
    <div className="App">
      <h3>Casino (Cuban Salsa) steps</h3>
      <NewStepForm addStep={addStep} getNextId={getNextId}/>
    {steps.map(step => (<div>Id: {step.id} - Step: {step.title} - Level: {step.level}</div>))}
    {/* {steps.map(step => <NewStepForm key={step.id} {...step} />)} */}
    </div>
  );
}

export default App;
