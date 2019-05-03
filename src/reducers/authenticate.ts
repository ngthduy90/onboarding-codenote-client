import { ActionTypes } from "../actions";

const initialState = {
  isAuthenticated: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return action.payload.isAuthenticated;
  
    default:
      return state;
  }
};
