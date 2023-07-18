import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Hard-coded data
  const data = [
    { id: 1, name: "John Doe", age: 25, company: "ABC Telecom", status: "Active" },
    { id: 2, name: "Jane Smith", age: 30, company: "XYZ Wireless", status: "Pending" },
    { id: 3, name: "Bob Johnson", age: 35, company: "PQR Communications", status: "Active" },
    { id: 1, name: "John Doe", age: 25, company: "ABC Telecom", status: "Active" },
    { id: 2, name: "Jane Smith", age: 30, company: "XYZ Wireless", status: "Pending" },
    { id: 3, name: "Bob Johnson", age: 35, company: "PQR Communications", status: "Active" },
    { id: 1, name: "John Doe", age: 25, company: "ABC Telecom", status: "Active" },
    { id: 2, name: "Jane Smith", age: 30, company: "XYZ Wireless", status: "Pending" },
    { id: 3, name: "Bob Johnson", age: 35, company: "PQR Communications", status: "Active" },
    // Add more data entries as needed
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.company}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Dashboard;