import { Loadable } from "../../types/loadable-type";
import { Indexable } from "../../types/indexable-type";

export interface LoginState extends Indexable, Loadable {
  email: string
  password: string
}