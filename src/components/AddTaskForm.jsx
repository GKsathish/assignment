
import  { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('pending'); // Add status state
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'taskName':
        setTaskName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'dueDate':
        setDueDate(value);
        break;
      case 'status': // Handle status change
        setStatus(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    let formErrors = {};
    if (!taskName.trim()) {
      formErrors.taskName = 'Task name is required';
    }
    if (!description.trim()) {
      formErrors.description = 'Description is required';
    }
    if (!dueDate.trim()) {
      formErrors.dueDate = 'Due date is required';
    }

    if (Object.keys(formErrors).length === 0) {
      // Submit the form
      addTask({ taskName, description, dueDate, status }); // Include status in the task object
      // Reset form fields
      setTaskName('');
      setDescription('');
      setDueDate('');
      setStatus('pending'); // Reset status
      setErrors({});
    } else {
      // Update state with validation errors
      setErrors(formErrors);
    }
  };

  return (
    <div className='card  p-5'>
       <h3 className='text-center  m-2 text-primary bg-warning '>Add New Task </h3>

      {/* <h2 className='text-danger'>Add New Task :</h2> */}
         <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Task Name:</label>
            <input type="text" name="taskName" value={taskName} onChange={handleChange} className="form-control" />
            {errors.taskName && <span className="error text-danger">{errors.taskName}</span>}
          </div>
          <div className="col">
            <label className="form-label">Due Date:</label>
            <input type="date" name="dueDate" value={dueDate} onChange={handleChange} className="form-control" />
            {errors.dueDate && <span className="error text-danger">{errors.dueDate}</span>}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Description:</label>
            <textarea name="description" value={description} onChange={handleChange} className="form-control"></textarea>
            {errors.description && <span className="error text-danger">{errors.description}</span>}
          </div>
          <div className="col">
            <label className="form-label">Status:</label>
            <select name="status" value={status} onChange={handleChange} className="form-select">
              <option value="pending">Pending</option>
              <option value="process">Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add Task</button>

      </form>
    </div>
  );
};

export default AddTaskForm;
