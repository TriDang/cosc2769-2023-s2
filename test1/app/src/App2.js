import './App.css';

function App2() {
  const students = [
    { id: 1, name: 'Alice', major: 'IT', GPA: 3.2 },
    { id: 2, name: 'Bob', major: 'SE', GPA: 2.4 },
    { id: 3, name: 'Carol', major: 'SE', GPA: 2.8 },
    { id: 4, name: 'David', major: 'IT', GPA: 3.8 },
    { id: 5, name: 'Emily', major: 'IT', GPA: 3.0 }
  ];

  const itStudents = students.filter(
    (std) => std.major === 'IT'
  ).sort(
    (std1, std2) => std2.GPA - std1.GPA
  ).map(
    (std) =>
      <tr key={std.id}>
        <td>{std.id}</td>
        <td>{std.name}</td>
        <td>{std.major}</td>
        <td>{std.GPA}</td>
      </tr>
  );

  const seStudents = students.filter(
    (std) => std.major === 'SE'
  ).sort(
    (std1, std2) => std2.GPA - std1.GPA
  ).map(
    (std) =>
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
      <h2>ID Students</h2>
      <table>
        <thead>
        <tr>
          {tableHeader}
        </tr>
        </thead>
        <tbody>
        {itStudents}
        </tbody>
      </table>
      <h2>SE Students</h2>
      <table>
        <thead>
        <tr>
          {tableHeader}
        </tr>
        </thead>
        <tbody>
        {seStudents}
        </tbody>
      </table>
    </div>
  );
}

export default App2;
