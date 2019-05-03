import { ISignUpResult } from "amazon-cognito-identity-js";
import { Loadable } from "../../types/loadable-type";
import { Indexable } from "../../types/indexable-type";

export interface SignupState extends Loadable, Indexable {
  email: string
  password: string
  confirmPassword: string
  confirmationCode: string
  newUser: ISignUpResult
}