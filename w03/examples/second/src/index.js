import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const langItems = [
  {key: 'li-js', value: 'JavaScript'},
  {key: 'li-jv', value: 'Java'},
  {key: 'li-py', value: 'Python'},
  {key: 'li-c0', value: 'C'},
  {key: 'li-c1', value: 'C++'},
  {key: 'li-ph', value: 'PHP'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App items={langItems} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
