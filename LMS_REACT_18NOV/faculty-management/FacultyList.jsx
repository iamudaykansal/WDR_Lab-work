import React from "react";

function FacultyList({ faculties = [] }) {  // Default value added

  return (
    <div>
      <h3 style={{ fontSize: "30px" }}>Faculty List</h3>

      {faculties.length === 0 ? (
        <p>No faculty registered yet.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>QUALIFICATION</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {faculties.map((faculty, index) => (
              <tr key={index}>
                <td>{faculty.facid}</td>
                <td>{faculty.facname}</td>
                <td>{faculty.qualification}</td>
                <td>{faculty.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FacultyList;
