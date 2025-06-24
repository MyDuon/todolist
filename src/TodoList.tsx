import { useState } from 'react'
import './Todolist.css'

function TodoList() {
  const [todoList, setTodoList] = useState([])

  function addTask(name: String) {
    const task = {
      id : 1,
      name: name,
      isCompleted: false
    }
    setTodoList((newTask) => (...newTask, todoList));
  }

  return (
    <>
      <h1 className='header'>todolist</h1>

    </>
  )
}

export default TodoList
