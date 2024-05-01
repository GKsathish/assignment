// import { Card } from 'react-bootstrap';

// const TaskSummaryPage = () => {
//   return (
//     <div className="container vh-100">
//       <h1 className="text-center mt-4 mb-3">Task Summary Page</h1>

//       <div className="row mb-4">
//         <div className="col-md-4">
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>Task Metrics</Card.Title>
//               <Card.Text>
//                 Total tasks: 18<br />
//                 Pending tasks: 5<br />
//                 In Progress tasks: 3<br />
//                 Completed tasks: 10
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="col-md-4">
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>Task Metrics</Card.Title>
//               <Card.Text>
//                 Total tasks: 08<br />
//                 Pending tasks: 0<br />
//                 In Progress tasks: 0<br />
//                 Completed tasks: 8
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="col-md-4">
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>Task Metrics</Card.Title>
//               <Card.Text>
//                 Total tasks: 88<br />
//                 Pending tasks: 25<br />
//                 In Progress tasks: 56<br />
//                 Completed tasks: 10
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskSummaryPage;

// TaskSummaryPage.jsx
// TaskSummaryPage.jsx


import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TaskSummaryPage = ({ tasks }) => {
  const countTasksByStatus = () => {
    const statusCounts = {};
    tasks.forEach(task => {
      if (statusCounts[task.status]) {
        statusCounts[task.status]++;
      } else {
        statusCounts[task.status] = 1;
      }
    });
    return statusCounts;
  };

  const renderPieChart = () => {
    const statusCounts = countTasksByStatus();
    const data = Object.keys(statusCounts).map(status => ({ name: status, value: statusCounts[status] }));
    return (
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    );
  };

  const renderBarChart = () => {
    const statusCounts = countTasksByStatus();
    const data = Object.keys(statusCounts).map(status => ({ name: status, count: statusCounts[status] }));
    return (
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    );
  };

  return (
 <div className='m-2'>
 <h3 className='text-center m-2  text-primary bg-warning '>Task Summary Reprots </h3>
 
 {/* <div className='col-3'>
     <h3>Pie Chart</h3>
     <ResponsiveContainer width="100%" height={500}>
       {renderPieChart()}
     </ResponsiveContainer>
   </div> */}
   <div className='col-6 p-5'>
     <h3 className='mb-2 text-danger'>Bar Chart :</h3>
     <ResponsiveContainer width="100%" height={400}>
       {renderBarChart()}
     </ResponsiveContainer>
   </div>

 </div>
      
  );
};

export default TaskSummaryPage;

