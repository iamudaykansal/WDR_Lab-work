import React from "react";
import { useForm } from "react-hook-form";

function FacultyRegistration({ addFaculty }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // data is stored as ARRAY
  const onSubmit = (data) => {
    //calling the function to insert data
    addFaculty(data);

    // alert("Faculty Registered!" + data);
    console.log(data);
  };

  return (
    <div>
      <h3 style={{ fontSize: "30px" }}>Register Faculty</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* FACULTY ID */}
        Faculty ID:
        <input
          type="text"
          placeholder="Faculty ID"
          {...register("facid", {
            required: true,
            pattern: /^[A-Za-z0-9]+$/,
          })}
        />
        {errors.facid && <p style={{ color: "red" }}>Faculty ID is required</p>}
        <br />
        <br />
        {/* FACULTY NAME */}
        Faculty Name:
        <input
          type="text"
          placeholder="Faculty Name"
          {...register("facname", {
            required: true,
            pattern: /^[A-Za-z ]+$/,
            minLength: 3,
          })}
        />
        {errors.facname && <p style={{ color: "red" }}>Enter valid name</p>}
        <br />
        <br />
        {/* Age */}
        Age:
        <input
          type="number"
          placeholder="Age"
          {...register("age", {
            required: true,
            minLength: 2,
          })}
        />
        {errors.age && <p style={{ color: "red" }}>Enter correct age </p>}
        <br />
        <br />
        {/* Qualification */}
        Qualification :
        <input
          type="text"
          placeholder="Qualification"
          {...register("qualification", {
            required: true,
            min: 5,
            max: 100,
          })}
        />
        {errors.qualification && (
          <p style={{ color: "red" }}>Enter the qualification</p>
        )}
        <br />
        <br />
        {/* DATE */}
        Joined Date:
        <input
          type="date"
          {...register("joined", {
            required: true,
          })}
        />
        {errors.joined && <p style={{ color: "red" }}>Date required</p>}
        <br />
        <br />
        {/* Status */}
        Status:
        <select
          {...register("status", {
            required: "Status is required",
          })}
        >
          <option value="">-- Select Status --</option>
          <option value="active">Active</option>
          <option value="left">Left</option>
        </select>
        {errors.status && (
          <p style={{ color: "red" }}>{errors.status.message}</p>
        )}
        <br />
        <br />
        <button type="submit">Register Faculty</button>
      </form>
    </div>
  );
}

export default FacultyRegistration;
