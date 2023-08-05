import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import App from './ContextApp';
// import App from './CalculatorReducer';
// import App from './RefApp';
import App from './EffectApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App initialValue={10} />
  </React.StrictMode>
);


// root.render(
//   <React.StrictMode>
//     <App initialValue={10} />
//   </React.StrictMode>
// );
