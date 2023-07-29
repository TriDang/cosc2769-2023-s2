import { useState } from "react";
import "./App.css";
import DynamicStudentTable from "./DynamicStudentTable";
import AddCourseForm from "./AddCourseForm";

const courses = [
  { name: "Full Stack Development", score: 2 },
  { name: "Algorithms", score: 3 },
  { name: "Database Applications", score: 4 },
];

function App3() {
  const [activeCourses, setActiveCourses] = useState(courses);
  const [courseName, setCourseName] = useState("");
  const [courseScore, setCourseScore] = useState(0);

  function handleDelete(courseName) {
    const newData = activeCourses.filter(
      (course) => course.name !== courseName
    );
    setActiveCourses(newData);
  }

  function handleNameChange(newName) {
    setCourseName(newName);
  }

  function handleScoreChange(newScore) {
    setCourseScore(newScore);
  }

  function handleAdd() {
    setActiveCourses([
      ...activeCourses,
      { name: courseName, score: parseFloat(courseScore) },
    ]);
  }

  return (
    <div className="App">
      <DynamicStudentTable onDelete={handleDelete} courses={activeCourses} />
      <AddCourseForm
        courseName={courseName}
        courseScore={courseScore}
        onNameChange={handleNameChange}
        onScoreChange={handleScoreChange}
        onAdd={handleAdd}
      />
    </div>
  );
}

export default App3;
