import Note from './note.model';
import { NoteState } from '../reducers/notes.reducer';

export default interface AppState {
    note: NoteState;
}