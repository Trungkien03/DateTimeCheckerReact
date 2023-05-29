import React from 'react';
import DateTimeForm from './components/DateTimeForm';
import MessageTable from './components/MessageTable';
import './App.css';
function App() {
  return (
    <div className="container">
      <img
        width="150px"
        height="110px"
        src="../images/logo.jpg"
        alt="logo-fpt-university"
      />
      <h1>Date Time Checker</h1>
      <DateTimeForm />
      <MessageTable />
    </div>
  );
}

export default App;
