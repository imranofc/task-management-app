import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

function TaskList() {
    const { state } = useContext(TaskContext);

    if (state.tasks.length === 0) {
        return <p className="no-task">No tasks available.</p>;
    }

    return (
        <div className="task-list">
            {state.tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;