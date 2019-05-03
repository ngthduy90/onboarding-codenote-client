import { Loadable } from "../../types/loadable-type";
import { Indexable } from "../../types/indexable-type";
import { Deletable } from "../../types/deletable-type";
import { Note } from "../../types/note-type";

export interface NoteDetailState extends Loadable, Indexable, Deletable {
  content: string
  note: Note
  attachmentURL: string
}