import { useState } from 'react'
import './Todolist.css'
import AddTodo from './AddTodo.tsx'

// Define the type for a task
interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

function TodoList() {
  //const [todoList, setTodoList] = useState(Task[])
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [id, setId] = useState(0);
  

  function addTask(name: string) {
    const task : Task = {
      id : id,
      name: name,
      isCompleted: false
    }

    setId(id + 1);
    setTodoList([...todoList, task]);
  }
  console.log(todoList);

  return (
    <>
      <AddTodo onAddTodo={addTask}/>
      <h1 className='header'>todolist</h1>
      <button onClick={() => addTask("play games")}>button</button>
      <ul>
        {todoList.map(task => (
          <li key={task.id}>{task.name}</li> // Render each task as a list item
        ))}
      </ul>
    </>
  )
}

export default TodoList
