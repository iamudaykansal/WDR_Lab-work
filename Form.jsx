import { useState } from "react";

function LabForm() {
  //state variable
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [standard, setStandard] = useState("");

  function displayName() {
    //updating state variable
    setName(event.target.value);
  }
  function displayAge() {
    //updating state variable
    setAge(event.target.value);
  }
  function displayStandard() {
    //updating state variable
    setStandard(event.target.value);
  }

  return (
    <div>
      Enter Name :
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter your name"
        onChange={displayName}
      />
      <br />
      <br />
      Enter the Age:
      <input
        type="number"
        name="age"
        value={age}
        placeholder="Enter your age"
        onChange={displayAge}
      />
      <br />
      <br />
      Enter the standard:
      <input
        type="text"
        name="standard"
        value={standard}
        placeholder="Enter your standard"
        onChange={displayStandard}
      />
      <br />
      <h3>
        ---------------------------------------------------------------------
      </h3>
      Name of User : {name}
      <br />
      <br />
      Age of User : {age}
      <br />
      <br />
      Standard of User : {standard}
    </div>
  );
}

export default LabForm;
