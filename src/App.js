import React, {useState} from 'react';

import './App.css';
// import StepList from './components/StepList';
import Sidebar from './components/Sidebar/Sidebar';

//this is for testing. it is a component, just not on a separate file
// const OneStep = () => {
//   return <div>
//     <h1>One step</h1>
//   </div>
// }


function App() {

  return (
    <div className="App">
      <Sidebar />
      {/*
      <StepList /> */}
      {/* <OneStep /> */}
    </div>
  );
}

export default App;
