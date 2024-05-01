// components/TaskList.js
// components/TaskList.js
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskAssignment from "./TaskAssignment";
import TaskSummaryPage from "./TaskSummaryPage";
// import TaskStatusButton from './TaskStatusButton';
import { Card } from "react-bootstrap"; // Import Bootstrap components

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: "Task 1",
      description: "Description for Task 1",
      dueDate: "2024-05-10",
      status: "pending",
      assignedUser: "",
    },
    {
      id: 2,
      taskName: "Task 2",
      description: "Description for Task 2",
      dueDate: "2024-01-15",
      status: "completed",
      assignedUser: "",
    },
    {
      id: 3,
      taskName: "Task 3",
      description: "Description for Task 3",
      dueDate: "2024-04-11",
      status: "process",
      assignedUser: "",
    },
    {
      id: 4,
      taskName: "Task 4",
      description: "Description for Task 4",
      dueDate: "2024-03-10",
      status: "pending",
      assignedUser: "",
    },
    {
      id: 5,
      taskName: "Task 5",
      description: "Description for Task 5",
      dueDate: "2024-02-10",
      status: "process",
      assignedUser: "",
    },
    {
      id: 6,
      taskName: "Task 6",
      description: "Description for Task 6",
      dueDate: "2024-05-10",
      status: "pending",
      assignedUser: "",
    },
    {
      id: 7,
      taskName: "Task 7",
      description: "Description for Task 7",
      dueDate: "2024-01-15",
      status: "completed",
      assignedUser: "",
    },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col m-2  d-flex flex-column justify-content-center align-content-center">
          <div className="card m-5 p-5">
           
            <AddTaskForm addTask={addTask} />
          </div>
          <div className="card  m-5 p-5">
          <h3 className="text-center  m-2 text-primary bg-warning ">Task Add List</h3>
            {/* <h2 className="mx-2">Task Assigned List :</h2> */}

            <div className="d-flex flex-wrap">
              {tasks.map((task) => (
                <div key={task.id} className="list-unstyled">
                  <div className="card m-1 p-4 shadow">
                    <strong className="text-success my-2">
                      {" "}
                      <span className="text-danger my-5">{task.taskName}</span>
                    </strong>
                    <p className="text-primary">
                      Description:{" "}
                      <span className="text-secondary mx-2">
                        {" "}
                        {task.description}
                      </span>{" "}
                    </p>
                    <p className="text-primary">
                      Due Date:{" "}
                      <span className="text-secondary mx-2">
                        {task.dueDate}
                      </span>{" "}
                    </p>
                    <p className="text-primary">
                      Status:{" "}
                      <span className="text-secondary mx-2">{task.status}</span>{" "}
                    </p>
                 
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card m-5">
            <TaskSummaryPage tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
