import React, { useState } from "react";   // ⬅ MUST import useState!
import FacultyRegistration from "./faculty-management/FacultyRegistration";
import FacultyList from "./faculty-management/FacultyList";
import FacultyUpdate from "./faculty-management/FacultyUpdate";
import FacultyProfile from "./faculty-management/FacultyProfile";

function App() {
  const [faculties, setFaculties] = useState([]); // ⬅ State to store data

  // Function to add faculty
  const addFaculty = (data) => {
    setFaculties([...faculties, data]); // ⬅ Add new data into array
  };

  return (
    <div>
      <FacultyRegistration addFaculty={addFaculty} />
      <FacultyList faculties={faculties} />    {/* ⬅ PASS PROP HERE */}
      < FacultyUpdate faculties={faculties}/>
      <FacultyProfile faculties={faculties} />
    </div>
  );
}

export default App;
