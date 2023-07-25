import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MustVisitPlaces from './components/MustVisitPlaces';

const places = [
  'Ho Chi Minh City',
  'Ha Noi',
  'New York',
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MustVisitPlaces places={places} />
  </React.StrictMode>
);

// const testing = ReactDOM.createRoot(document.getElementById('testing'));
// testing.render(
//   <React.StrictMode>
//     <Testing />
//   </React.StrictMode>
// );
