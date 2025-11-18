import React from "react";
import { useForm } from "react-hook-form";

function FacultyUpdate({ faculties, setFaculties }) {  // <-- Receive props
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Update Function
  const onSubmit = (data) => {
    const exists = faculties.some((f) => f.facid === data.facid);  // CHECK

    if (!exists) {
      alert("Faculty not found!");
      return;
    }

    // Updating faculty
    const updatedList = faculties.map((f) =>
      f.facid === data.facid
        ? { ...f, facname: data.facname, qualification: data.qualification, status: data.status, age: data.age, joined: data.joined }
        : f
    );

    setFaculties(updatedList);  // <-- Update state in parent
    alert("Faculty updated!");
    reset();
  };

  return (
    <div>
      <h3 style={{ fontSize: "30px" }}>Update Faculty</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        Faculty ID:
        <input
          type="text"
          placeholder="Faculty ID"
          {...register("facid", { required: true })}
        />
        {errors.facid && <p style={{ color: "red" }}>Faculty ID is required</p>}
        <br /><br />

        Faculty Name:
        <input
          type="text"
          placeholder="Faculty Name"
          {...register("facname", { required: true, minLength: 3 })}
        />
        {errors.facname && <p style={{ color: "red" }}>Enter valid name</p>}
        <br /><br />

        Age:
        <input
          type="number"
          placeholder="Age"
          {...register("age", { required: true, min: 18, max: 70 })}
        />
        {errors.age && <p style={{ color: "red" }}>Enter valid age</p>}
        <br /><br />

        Qualification:
        <input
          type="text"
          placeholder="Qualification"
          {...register("qualification", { required: true })}
        />
        {errors.qualification && <p style={{ color: "red" }}>Qualification required</p>}
        <br /><br />

        Joined Date:
        <input
          type="date"
          {...register("joined", { required: true })}
        />
        {errors.joined && <p style={{ color: "red" }}>Date required</p>}
        <br /><br />

        Status:
        <select {...register("status", { required: true })}>
          <option value="">-- Select Status --</option>
          <option value="active">Active</option>
          <option value="left">Left</option>
        </select>
        {errors.status && <p style={{ color: "red" }}>Status is required</p>}
        <br /><br />

        <button type="submit">Update Faculty</button>
      </form>
    </div>
  );
}

export default FacultyUpdate;
