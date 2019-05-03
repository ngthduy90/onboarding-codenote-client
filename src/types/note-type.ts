export interface Note {
  noteId: string
  content: string
  createdAt: string | number | Date
  attachment?: any
}