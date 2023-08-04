import './App.css';

function App2({ students }) {
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
