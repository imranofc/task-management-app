import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import taskReducer from "../reducer/taskReducer";
import initialState from "../reducer/initialState";

function TaskProvider({ children }) {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;