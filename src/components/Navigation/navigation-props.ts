import { RouteComponentProps } from "react-router";
import { AuthenticateProps, AuthenticateState } from "../../types/authenticate-type";

export interface NavigationProps extends RouteComponentProps, AuthenticateProps, AuthenticateState {}