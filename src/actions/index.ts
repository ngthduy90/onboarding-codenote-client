export const ActionTypes = {
  AUTH_USER: 'AUTH_USER'
}

export const authenticateUser = isAuthenticated => ({
  type: ActionTypes.AUTH_USER,
  payload: {
    isAuthenticated
  }
});