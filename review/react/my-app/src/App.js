import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'


function App() {

  const [tasks, setTasks] =  useState(
    [
    {
      id:1,
      text:"first task",
      day:"feb 5",
      reminder:"true"
    },
    {
      id:2,
      text:"second task",
      day:"feb 6",
      reminder:"false"
    },
    {
      id:3,
      text:"third task",
      day:"feb 7",
      reminder:"true"
    }
  ])

  const deleteTask = (id) =>{
    setTasks(tasks.filter((el)=> el.id !== id))
  }

  const toggleReminder = (id) =>{
setTasks(tasks.map((el)=> el.id === id ? {...el,reminder: !el.reminder } : el))
}

  return (
    <div className="App">
      <Header title='hello my friend'/>
      {tasks.length > 0 ? <Tasks tasks= { tasks } onDelete={ deleteTask } onToggle={ toggleReminder }/> : <h2>No tasks here</h2>}
    </div>
  );
}



export default App;
