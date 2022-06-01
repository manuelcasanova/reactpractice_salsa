import {useState} from 'react';
import './App.css';
import NewStepForm from './NewStepForm';

function App() {
  const [steps, setSteps] = useState([{id:0, title: "Basic step", level: "Beginner"}])
  
  function addStep(step) {
    // const step = {id: 1, title: "Basic step forward and backwards", level: "Beginner"}
    setSteps([...steps, step])
  }
  
  return (
    <div className="App">
      <h3>Casino (Cuban Salsa) steps</h3>
      <NewStepForm addStep={addStep} />
    {steps.map(step => (<div>{step.title} - {step.level}</div>))}
    </div>
  );
}

export default App;
