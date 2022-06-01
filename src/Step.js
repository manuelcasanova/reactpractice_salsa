export default function Step({step, removeStep}) {

  function removeButtonClick(e) {
    removeStep(step.id);
  }

  return (
    <div>
      Id: {step.id} - Step: {step.title} - Level: {step.level}<br />
      <button onClick={removeButtonClick}>Remove</button>
    </div>
  )
}