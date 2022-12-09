import './App.css';
import Login from './auth/login';
import Users from './auth/user';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Router>
        <Routes>
        <Route path="users" element={<Users/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
