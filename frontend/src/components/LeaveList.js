import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeaveList = () => {
  const [leaves, setLeaves] = useState([]);

  const fetchLeaves = async () => {
    try {
      const res = await axios.get('http://localhost:8081/api/leaves');
      setLeaves(res.data);
    } catch (err) {
      console.error("Error fetching leaves:", err);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div className="leave-list">
      <h2>Leave Requests</h2>
      {leaves.length === 0 ? (
        <p>No leave requests found.</p>
      ) : (
        <ul>
          {leaves.map((leave) => (
            <li key={leave.id}>
              <strong>{leave.employeeName}</strong> requested leave from <em>{new Date(leave.fromDate).toLocaleDateString()}</em> to <em>{new Date(leave.toDate).toLocaleDateString()}</em><br />
              Reason: {leave.reason}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeaveList;
