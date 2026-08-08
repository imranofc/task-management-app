import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { ADD_TASK } from "../../reducer/taskActions";
import "./TaskInput.css";

function TaskInput() {
  const [task, setTask] = useState("");
  const { dispatch } = useContext(TaskContext);

  function handleAddTask() {
    if (task.trim() === "") return;

    dispatch({
      type: ADD_TASK,
      payload: task,
    });

    setTask("");
  }

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        maxLength={25}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;