import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [URL, setURL] = useState("http://localhost:2222/");
  const [method, setMethod] = useState("GET");

  function handleClick() {
    fetch(URL, {
      method: method,
    })
      .then((res) => res.text())
      .then((data) => alert(data));
  }

  useEffect(handleClick, []);

  return (
    <div className="App">
      URL{" "}
      <input
        type="text"
        value={URL}
        onChange={(evt) => setURL(evt.target.value)}
      />
      <br />
      Method
      <select value={method} onChange={(evt) => setMethod(evt.target.value)}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="DELETE">DELETE</option>
        <option value="UPDATE">UPDATE</option>
      </select>
      <br />
      <input type="button" value="Send" onClick={handleClick} />
    </div>
  );
}

export default App;
