import React, { useState } from "react";

export default function NewStepForm(props) {

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");

  function changeStep(e) {
    setTitle(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const step = {
      // id: props.getNextId(),
      title,
      level
    }
    // console.log(step)
    props.addStep(step);
    resetForm();
  }

  function resetForm() {
    setTitle("");
    setLevel(setLevel); //The default value of the input form for level is the last one used.
  }

  return (<form onSubmit={onSubmit}>
    <label htmlFor="title">Step</label>
    <input type="text" name="title" value={title} onChange={changeStep} />
    <p></p>


    <div>
      <label htmlFor="title">Level</label>
      <select value={level} onChange={e => setLevel(e.target.value)} >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Intermediate 2</option>
        <option>Advanced</option>
        <option>Advanced 2</option>
        <option>Hardcore</option>
      </select>

    </div>

    <p></p>
    <button type="Submit">Add step</button>
    <p></p>
  </form>);
}