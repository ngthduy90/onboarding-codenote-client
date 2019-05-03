export enum ActionTypeEnum {
  Auth_User='AUTH_USER'
}

export const authenticateUser = isAuthenticated => ({
  type: ActionTypeEnum.Auth_User,
  payload: {
    isAuthenticated
  }
});