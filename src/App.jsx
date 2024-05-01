import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
// import TaskList from './components/TaskList';
import TaskSummaryPage from './components/TaskSummaryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskApp from './components/TaskApp';


function App() {
  return (
    <Router>
 
        <Routes> {/* Wrap your routes in Routes */}
          <Route exact path="/" element={<TaskApp />} />
          <Route path="/summary" element={<TaskSummaryPage />} />
          
        </Routes>
     
    </Router>
  );
}

export default App;
