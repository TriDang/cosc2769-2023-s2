import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App2';
import App from './App3';

const students = [
  { id: 1, name: 'Alice', major: 'IT', GPA: 3.2, show: true },
  { id: 2, name: 'Bob', major: 'SE', GPA: 2.4, show: false },
  { id: 3, name: 'Carol', major: 'SE', GPA: 2.8, show: true },
  { id: 4, name: 'David', major: 'IT', GPA: 3.8, show: true },
  { id: 5, name: 'Emily', major: 'IT', GPA: 3.0, show: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App students={students} />
  </React.StrictMode>
);
