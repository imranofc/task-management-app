import "./App.css";
import TaskProvider from "./context/TaskProvider";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import TaskSummary from "./components/TaskSummary/TaskSummary";

function App() {
    return (
        <TaskProvider>
            <div className="app">
                <h1>Task Manager</h1>
                <TaskSummary />
                <TaskInput />
                <TaskList />
            </div>
        </TaskProvider>
    );
}

export default App;