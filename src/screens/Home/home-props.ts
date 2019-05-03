import { RouteComponentProps } from "react-router";
import { AuthenticateState } from "../../types/authenticate-type";

export interface HomeProps extends RouteComponentProps, AuthenticateState {

}