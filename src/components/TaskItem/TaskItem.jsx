import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { TOGGLE_TASK, EDIT_TASK, DELETE_TASK } from "../../reducer/taskActions";
import "./TaskItem.css";

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.text);
  const [showModal, setShowModal] = useState(false);

  function handleEdit() {
    if (updatedTask.trim() === "") return;

    dispatch({
      type: EDIT_TASK,
      payload: {
        id: task.id,
        text: updatedTask,
      },
    });

    setIsEditing(false);
  }

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() =>
          dispatch({
            type: TOGGLE_TASK,
            payload: task.id,
          })
        }
      />

      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={updatedTask}
          maxLength={25}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="task-buttons">
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button className="editBtn" onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button className="deleteBtn" onClick={() => setShowModal(true)}>Delete</button>
      </div>
      <ConfirmModal
    isOpen={showModal}
    onClose={() => setShowModal(false)}
    onConfirm={() => {
        dispatch({
            type: DELETE_TASK,
            payload: task.id,
        });
        setShowModal(false);
    }}
/>
    </div>
  );
}

export default TaskItem;
