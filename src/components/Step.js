export default function Step({step, deleteStep, editStep}) {

  // function removeButtonClick(e) {
  //   deleteStep(step.id);
  // }

  return (
    <div>
      Id: {step.id} - Step: {step.title} - Level: {/*name*/} Id: {step.level_id}
      <button onClick={() => editStep(step.id)}>Edit</button>
      <button onClick={() => deleteStep(step.id)}>Delete</button>
    </div>
  )
}