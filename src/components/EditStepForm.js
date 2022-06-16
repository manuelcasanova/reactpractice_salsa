import React, { useState } from "react";

export default function EditStepForm(props) {

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");

  function changeStep(e) {
    setTitle(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const step = {
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

  return (<div>Edit Step Form</div>);
}