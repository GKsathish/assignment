
// import { useState } from 'react';

// const TaskAssignment = ({ taskId }) => {
//   const [assignedUser, setAssignedUser] = useState('');
//   const [users] = useState([
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//     { id: 3, name: 'Alice Johnson' },
//     { id: 4, name: 'Bob Brown' },
//     // Add more users as needed
//   ]);

//   const handleAssignmentChange = (e) => {
//     setAssignedUser(e.target.value);
//   };

//   return (
//     <div className='m-2'>
//       <label htmlFor={`assign-user-${taskId}`}>Assign to:</label>
//       <select id={`assign-user-${taskId}`} value={assignedUser} onChange={handleAssignmentChange} className=' p-2'>
//         <option value="">Select User</option>
//         {users.map(user => (
//           <option key={user.id} value={user.id}>{user.name}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default TaskAssignment;
// components/TaskAssignment.js
// components/TaskAssignment.js
import  { useState } from 'react';

const TaskAssignment = ({ taskId, assignUser }) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
    assignUser(taskId, e.target.value); // Call the assignUser function from parent component
  };

  // Sample user options
  const users = ['User 1', 'User 2', 'User 3'];

  return (
    <div>
      <label htmlFor="user">Assign User:</label>
      <select id="user" value={selectedUser} onChange={handleUserChange}>
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user} value={user}>{user}</option>
        ))}
      </select>
    </div>
  );
};

export default TaskAssignment;

