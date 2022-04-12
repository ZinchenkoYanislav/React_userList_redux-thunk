import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions/user";

export default function FormUser({ toggleForm }) {
  const [newTitleForm, setNewTitleForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();

  function changeHandler(e) {
    setNewTitleForm({
      ...newTitleForm,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(addUser(newTitleForm));
    toggleForm();
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          name="name"
          value={newTitleForm.name}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group mb-3">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email"
          name="email"
          value={newTitleForm.email}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group mb-3">
        <label>Phone number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your phone number"
          name="phone"
          value={newTitleForm.phone}
          onChange={changeHandler}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary btnMargin">
          Submit
        </button>
        <button
          onClick={toggleForm}
          type="button"
          className="btn btn-warning ml-5"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
