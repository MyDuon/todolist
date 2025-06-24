import { useState } from "react";

function AddTodo() {
    const [task, setTask] = useState("");
    return(
        <>
          <h1>What is the task for today</h1>
        </>
    )
}

export default AddTodo;