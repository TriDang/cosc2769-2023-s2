import './App.css';
import Button from './Button';
import { useReducer } from 'react';

function reducer(current, action) {
  if (action.type === 'digit') {
    const newValue = current.currentNumber * 10 + action.value;
    return { ...current, currentNumber: newValue };
  }
  if (action.type === 'operator') {
    return { prevNumber: current.currentNumber, currentNumber: 0, operator: action.value };
  }
  if (action.type === 'result') {
    const res = eval(`${current.prevNumber} ${current.operator} ${current.currentNumber}`);
    const newState = { ...current, prevNumber: current.currentNumber, currentNumber: res };
    return newState;
  }
}

export default function CalculatorReducer() {
  const initialState = { prevNumber: 0, currentNumber: 0, operator: '+' };
  const [value, dispatch] = useReducer(reducer, initialState);

  

  const calcButtons = [
    [  // first row
      {cols: 1, value: 7, type: 'digit'},
      {cols: 1, value: 8, type: 'digit'},
      {cols: 1, value: 9, type: 'digit'},
      {cols: 1, value: '/', type: 'operator'},
    ],
    [  // second row
      {cols: 1, value: 4, type: 'digit'},
      {cols: 1, value: 5, type: 'digit'},
      {cols: 1, value: 6, type: 'digit'},
      {cols: 1, value: '*', type: 'operator'},
    ],
    [  // third row
      {cols: 1, value: 1, type: 'digit'},
      {cols: 1, value: 2, type: 'digit'},
      {cols: 1, value: 3, type: 'digit'},
      {cols: 1, value: '-', type: 'operator'},
    ],
    [  // last row
      {cols: 1, value: 0, type: 'digit'},
      {cols: 2, value: '=', type: 'result'},
      {cols: 1, value: '+', type: 'operator'},
    ]
  ];
  
  const buttons = calcButtons.map((row, idx) => {
    const rowButtons = row.map((btn) => 
      <Button
        key={btn.value}
        cols={btn.cols}
        type={btn.type}
        value={btn.value}
        onClick={() => dispatch({ type: btn.type, value: btn.value })} />
    );
    return (
      <div key={idx} className="row">
        { rowButtons }
      </div>
    );
  });

  return (
    <div className="App">
      <h1>
        Calculator
      </h1>
      <div className='container'>
        {/* Result row */}
        <div className='row'>
          <div className='col'>
            <input type='text' readOnly={true} value={value.currentNumber} />
          </div>
        </div>
        { buttons }
      </div>
    </div>
  );
}

