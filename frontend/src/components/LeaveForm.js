import React, { useState } from 'react';
import axios from 'axios';

const LeaveForm = ({ onLeaveSubmitted }) => {
  const [leaveData, setLeaveData] = useState({
    employeeName: '',
    fromDate: '',
    toDate: '',
    reason: '',
  });

  const handleChange = (e) => {
    setLeaveData({ ...leaveData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/leaves', leaveData); // ✅ FIXED
      alert("Leave submitted successfully");
      setLeaveData({ employeeName: '', fromDate: '', toDate: '', reason: '' });
      onLeaveSubmitted();
    } catch (err) {
      console.error(err);
      alert("Failed to submit leave");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="leave-form">
      <h2>Apply for Leave</h2>
      <input type="text" name="employeeName" placeholder="Employee Name" value={leaveData.employeeName} onChange={handleChange} required />
      <input type="date" name="fromDate" value={leaveData.fromDate} onChange={handleChange} required />
      <input type="date" name="toDate" value={leaveData.toDate} onChange={handleChange} required />
      <textarea name="reason" placeholder="Reason" value={leaveData.reason} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeaveForm;
