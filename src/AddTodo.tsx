import { useState } from "react";
import './AddTodo.css'

interface AddTodoComponent {
  onAddTodo: (todo: string) => void;
}

function AddTodo({ onAddTodo }: AddTodoComponent) {
  const [task, setTask] = useState<string>("");

  return(
      <>
        <div className="add-todo-wrapper">
          <h1>What is the task for today</h1>
          <form action={() => {setTask(""); onAddTodo(task);}}>
            <input 
              placeholder="your task" 
              value={task}
              onChange={e => setTask(e.target.value)}
              name="query" />
            <button type="submit">Add</button>
          </form>
        </div>
      </>
  )
}
export default AddTodo;