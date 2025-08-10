import React, { useState } from 'react';
import LeaveForm from './components/LeaveForm';
import LeaveList from './components/LeaveList';
import './App.css';

function App() {
  const [reloadList, setReloadList] = useState(false);

  const handleLeaveSubmitted = () => {
    setReloadList(!reloadList);
  };

  return (
    <div className="App">
      <h1>Leave Management System</h1>
      <LeaveForm onLeaveSubmitted={handleLeaveSubmitted} />
      <LeaveList key={reloadList} />
    </div>
  );
}

export default App;
