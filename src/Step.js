export default function Step({step, removeStep}) {

  // function removeButtonClick(e) {
  //   removeStep(step.id);
  // }

  return (
    <div>
      Id: {step.id} - Step: {step.title} - Level: {step.level}
      <button onClick={() => removeStep(step.id)}>Remove</button>
    </div>
  )
}