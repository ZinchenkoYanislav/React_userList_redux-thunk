import {
  ACTION_ADD_USER,
  ACTION_DELETE_USER,
  ACTION_FETCH_USERS,
} from "../actions/user";

const initialState = {
  users: [],
};
export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_FETCH_USERS:
      return { ...state, users: payload };
    case ACTION_ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case ACTION_DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
}
