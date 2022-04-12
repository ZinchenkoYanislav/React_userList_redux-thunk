import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import UserListComponent from "./components/userList/UserListComponent";
import { fetchUsers } from "./store/actions/user";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return <UserListComponent />;
}
