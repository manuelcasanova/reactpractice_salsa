import React, {useState} from 'react';

import './App.css';
import NewStepForm from './components/NewStepForm';
import StepList from './components/StepList';

function App() {

  const [refresh, setRefresh] = useState(false);

  return (
    <div className="App">
      <NewStepForm refresh={refresh} setRefresh={setRefresh}/>
      <StepList refresh={refresh} setRefresh={setRefresh}/>
      
    </div>
  );
}

export default App;
