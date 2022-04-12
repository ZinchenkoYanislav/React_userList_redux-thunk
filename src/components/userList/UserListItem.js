import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/actions/user";

export default function UserListItem({ item }) {
  const dispatch = useDispatch();
  function onDelete() {
    dispatch(deleteUser(item.id));
  }
  return (
    <tr className="table-primary">
      <td className="text-center">{item.name}</td>
      <td className="text-center">{item.email}</td>
      <td className="text-center">{item.phone}</td>
      <td className="text-center">
        <button onClick={onDelete} type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
