export default function Step({step, deleteStep, editStep}) {

  return (
    <div>
      {/* step.step_title, etc. come from the names given in the query getAllSteps */}
      Step Id: {step.step_id} - Name: {step.step_title} - Level: {step.level_title} Level Id: {step.level_id}
      <button onClick={() => editStep(step.step_id)}>Edit</button>
      <button onClick={() => deleteStep(step.step_id)}>Delete</button>
    </div>
  )
}