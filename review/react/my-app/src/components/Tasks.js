import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((el) => (
      <Task key={el.id} task={el} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </div>
  )
}

export default Tasks