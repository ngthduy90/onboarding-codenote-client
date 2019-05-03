export interface AuthenticateProps {
  userHasAuthenticated (boolean): void
}

export interface AuthenticateState {
  isAuthenticated: boolean
}