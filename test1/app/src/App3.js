import { useState } from 'react';
import './App.css';

function App3({ students }) {
  const studentsWithShow = students.map(
    (std) => {return {...std, show: true}}
  );

  const [studentList, setStudentList] = useState(studentsWithShow);

  const updateTable = (studentID) => {
    const studentList2 = studentList.map((std) =>
      std.id === studentID ? {...std, show: !std.show} : {...std}
    );
    setStudentList(studentList2);
  }

  const studentCheckboxes = studentList.map((std) =>
    <li key={std.id}>{std.name} <input type="checkbox" checked={std.show} onClick={() => updateTable(std.id)} /> Show</li>
  )
  
  const studentListTable = studentList.filter(
    (std) => std.show === true
  ).map((std) =>
    <tr key={std.id}>
      <td>{std.id}</td>
      <td>{std.name}</td>
      <td>{std.major}</td>
      <td>{std.GPA}</td>
    </tr>
  );

  const columns = ['id', 'name', 'major', 'GPA'];
  const tableHeader = columns.map(
    (col) => <th key={col}>{col}</th>
  )

  return (
    <div className="App">
      <h3>Click to show/hide details</h3>
      <ul>
        {studentCheckboxes}
      </ul>
      <h2>Student Information</h2>
      <table>
        <thead>
        <tr>
          {tableHeader}
        </tr>
        </thead>
        <tbody>
          {studentListTable}
        </tbody>
      </table>
    </div>
  );
}

export default App3;
