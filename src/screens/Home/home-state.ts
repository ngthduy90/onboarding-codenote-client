import { Loadable } from "../../types/loadable-type";
import { Note } from "../../types/note-type";

export interface HomeState extends Loadable {
  notes: Array<Note>
}