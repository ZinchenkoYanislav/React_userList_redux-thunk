import React from "react";
import FormUser from "./FormUser";
import UserList from "./UserList";
import useForm from "./useForm";

export default function UserListComponent() {
  const { formVisible, toggleForm } = useForm();
  return (
    <>
      <div className="container">
        <button
          type="button"
          onClick={toggleForm}
          className="btn btn-primary mb-3"
        >
          Add User
        </button>
        {formVisible ? <FormUser toggleForm={toggleForm} /> : ""}
        <UserList />
      </div>
    </>
  );
}
