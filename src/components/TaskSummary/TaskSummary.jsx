import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import "./TaskSummary.css";

function TaskSummary() {
    const { state } = useContext(TaskContext);

    const totalTasks = state.tasks.length;
    const completedTasks = state.tasks.filter(
        (task) => task.completed
    ).length;

    return (
        <div className="task-summary">
            <h3>Task Summary</h3>
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
            <p>Pending Tasks: {totalTasks - completedTasks}</p>
        </div>
    );
}

export default TaskSummary;