import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
const TaskApp = () => {
      const [tasks, setTasks] = useState([]);
    
      const addTask = (newTask) => {
        // Generate unique id for new task
        newTask.id = Date.now();
        newTask.status = 'pending';
        setTasks([...tasks, newTask]);
      };
    
      const updateStatus = (taskId, newStatus) => {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
      };
    
      return (
        <div className="card shadow m-2 ">
          {/* <AddTaskForm addTask={addTask} /> */}
          <TaskList tasks={tasks} updateStatus={updateStatus} />
        </div>
      );
    };
    
    export default TaskApp;