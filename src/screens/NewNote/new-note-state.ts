import { Loadable } from "../../types/loadable-type";
import { Indexable } from "src/types/indexable-type";

export interface NewNoteState extends Loadable, Indexable {
  content: string
}