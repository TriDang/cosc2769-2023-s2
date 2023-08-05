import { useEffect, useRef, useState, useReducer } from "react";
// import Counter from './Counter';
import { SecretNumberContext } from "./Child";
import Parent from "./Parent";

function App() {
  // Example 1 - useState - same or different Counter?
  // const [color, setColor] = useState('red');
  // if (color === 'red') {
  //   return (
  //     <div style={{'color': 'red'}}>
  //       <Counter />
  //       <button onClick={() => {color === 'red' ? setColor('black') : setColor('red');}}>Change color</button>
  //     </div>
  //   )
  // }
  // return (
  //   <div style={{'color': 'black'}}>
  //     <Counter />
  //     <button onClick={() => {color === 'red' ? setColor('black') : setColor('red');}}>Change color</button>
  //   </div>
  // )
  // Example 2 - useContext
  // return (
  //   <div>
  //     <SecretNumberContext.Provider value={42}>
  //       <Parent />
  //       <div>
  //         <div>
  //           <SecretNumberContext.Provider value={76}>
  //             <Parent />
  //           </SecretNumberContext.Provider>
  //         </div>
  //       </div>
  //     </SecretNumberContext.Provider>
  //     <Parent />
  //   </div>
  // );
  // Example 3 - useReducer
  // const [value, setValue] = useState(1);
  // return (
  //   <>
  //     <h1>The value is {value}</h1>
  //     <div>
  //       <button onClick={() => {setValue(value + 1);}}>Increase</button>
  //       <button onClick={() => {setValue(value - 1);}}>Decrease</button>
  //       <button onClick={() => {setValue(value * 2);}}>Double</button>
  //       <button onClick={() => {setValue(value / 2);}}>Halve</button>
  //     </div>
  //   </>
  // );
  // const reducer = (current, action) => {
  //   switch (action.type) {
  //     case 'increase':
  //       return current + 1;
  //     case 'decrease':
  //       return current - 1;
  //     case 'double':
  //       return current * 2;
  //     case 'halve':
  //       return current / 2;
  //     default:
  //       return 0;
  //   }
  // }
  // const [value, dispatch] = useReducer(reducer, 1);
  // return (
  //   <>
  //     <h1>The value is {value}</h1>
  //     <div>
  //       <button onClick={() => {dispatch({type: 'increase'});}}>Increase</button>
  //       <button onClick={() => {dispatch({type: 'decrease'});}}>Decrease</button>
  //       <button onClick={() => {dispatch({type: 'double'});}}>Double</button>
  //       <button onClick={() => {dispatch({type: 'halve'});}}>Halve</button>
  //     </div>
  //   </>
  // );

  // Example 4 - useRef to store values
  // const clicks = useRef(0);
  // const [visibleClicks, setVisibleClicks] = useState(clicks.current);
  // return (
  //   <>
  //     <h1>Number of clicks {visibleClicks}</h1>
  //     <button onClick={() => clicks.current++}>Click me to increase</button>
  //     <button onClick={() => setVisibleClicks(clicks.current)}>
  //       Click me show updated clicks
  //     </button>
  //   </>
  // );
  // Example 5 - useRef to access DOM element
  // const element = useRef(null);
  // const [currentValue, setCurrentValue] = useState("");
  // return (
  //   <>
  //     <input
  //       ref={element}
  //       value={currentValue}
  //       onChange={(e) => setCurrentValue(e.target.value)}
  //     />
  //     <button onClick={() => alert(element.current.value)}>Show value</button>
  //   </>
  // );
  // Example 6 - useEffect
  const first = useRef(true);
  useEffect(() => {
    if (!first.current) {
      fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((json) => alert(json.fact));
    }
  });
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => { setCount(count + 1); first.current = false; }}>Get a fact about cat</button>
      <h3>Get {count} facts</h3>
    </>
  );
}

export default App;
