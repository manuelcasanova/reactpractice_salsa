import React, { useEffect, useState } from 'react';
import './App.css';
import NewStepForm from './components/NewStepForm';
// import EditStepForm from './components/EditStepForm';
import StepList from './components/StepList';

function App() {



  return (
    <div className="App">

{/* <Routes>

<Route path="" element={<NewStepForm />} />

          <Route path="/steps/edit" element={<EditStepForm />} />


        </Routes> */}

      <NewStepForm  />
      <StepList />
    

    </div>
  );
}

export default App;
