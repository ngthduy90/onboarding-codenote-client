import { RouteComponentProps } from "react-router";
import { AuthenticateProps } from "./authenticate-type";

export interface AppProps extends AuthenticateProps, RouteComponentProps {}

export interface AppState {
  isAuthenticating: boolean
}