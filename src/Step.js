export default function Step({step, deleteStep}) {

  // function removeButtonClick(e) {
  //   deleteStep(step.id);
  // }

  return (
    <div>
      Id: {step.id} - Step: {step.title} - Level: {step.level_id} 
      <button onClick={() => deleteStep(step.id)}>Remove</button>
    </div>
  )
}