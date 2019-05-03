import { ActionTypeEnum } from "../actions";

const initialState = {
  isAuthenticated: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypeEnum.Auth_User:
      return action.payload.isAuthenticated;
  
    default:
      return state;
  }
};
