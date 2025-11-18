import React, { useState } from "react";

function FacultyProfile({ faculties }) {
  const [id, setId] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const found = faculties.find((f) => f.facid === id); // FIXED

    if (!found) {
      setSelectedFaculty(null);
      setError("Faculty not found!");
    } else {
      setSelectedFaculty(found);
      setError("");
    }
  };

  return (
    <div>
      <h3 style={{ fontSize: "30px" }}>Faculty Details</h3>

      <input
        type="text"
        placeholder="Enter Faculty ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <br />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {selectedFaculty && (
        <div style={{ border: "1px solid black", padding: "15px" }}>
          <p><strong>Faculty ID:</strong> {selectedFaculty.facid}</p>
          <p><strong>Name:</strong> {selectedFaculty.facname}</p>
          <p><strong>Qualification:</strong> {selectedFaculty.qualification}</p>
          <p><strong>Status:</strong> {selectedFaculty.status}</p>
        </div>
      )}
    </div>
  );
}

export default FacultyProfile;
