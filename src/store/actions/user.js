import { deleteReq, get, post } from "../../api";

const API_URL = "https://6252ce1e7f7fa1b1ddea01e2.mockapi.io/users/";

export const ACTION_ADD_USER = "ACTION_ADD_USER";
export function addUser(payload) {
  return function (dispatch) {
    post(API_URL, {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
    }).then((date) => {
      dispatch({
        type: ACTION_ADD_USER,
        payload: date,
      });
    });
  };
}

export const ACTION_FETCH_USERS = "ACTION_FETCH_USERS";
export function fetchUsers() {
  return function (dispatch) {
    get(API_URL).then((date) => {
      dispatch({
        type: ACTION_FETCH_USERS,
        payload: date,
      });
    });
  };
}

export const ACTION_DELETE_USER = "ACTION_DELETE_USER";
export function deleteUser(payload) {
  return function (dispatch) {
    deleteReq(API_URL + payload).then((date) => {
      dispatch({
        type: ACTION_DELETE_USER,
        payload: date.id,
      });
    });
  };
}
