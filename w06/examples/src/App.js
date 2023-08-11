import { useState } from "react";

function App() {
  const [student, setStudent] = useState({id: 's123', name: 'Alice', GPA: 3.5});

  function changeMe() {
    // const student2 = {id: student.id, name: student.name, GPA: student.GPA + 0.1}
    const student2 = {...student, GPA: student.GPA + 0.1}
    setStudent(student2);
  }

  const stdList = [];
  for (let k in student) {
    stdList.push(<li>{k}: {student[k]}</li>);
  }

  return (
    <>
      <ul>
        {stdList}
      </ul>
      <button onClick={changeMe}>Click me to change</button>
    </>
  );
}

export default App;
