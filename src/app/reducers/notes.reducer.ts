import {NoteActionTypes, NoteAction} from '../actions/notes.actions';
import Note from '../models/note.model';

export interface NoteState {
    notes: Note[],
    loading: boolean,
    error: string | any
}

const initialState: NoteState = {
    notes: 
        [
            {
                id: 1,
                userId: 1,
                title: "First Note",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                userId: 1,
                title: "Second Note",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ],
        loading: false,
        error: ""
    }

export function NotesReducer(state: NoteState = initialState, action: NoteAction){
 switch(action.type){

    case NoteActionTypes.ADD_NOTE:
        return {
            ...state,
            loading: true
        }
    case NoteActionTypes.ADD_NOTE_SUCCESS:
        return {
            ...state,
            notes: [action.payload, ...state.notes],
            loading: false
        }
    case NoteActionTypes.ADD_NOTE_FAIL:
        return {
            ...state,
            error: action.payload,
            loading: false
        };

    case NoteActionTypes.DELETE_NOTE:
        return {
            ...state,
            loading: true
        }
    case NoteActionTypes.DELETE_NOTE_SUCCESS:{
        let updatedNotes = [...state.notes];
        updatedNotes.splice(action.payload, 1);   
        return {
            ...state,
            notes: updatedNotes,
            loading: false
        };
    }
    case NoteActionTypes.DELETE_NOTE_FAIL:
        return {
            ...state,
            error: action.payload,
            loading: false
        }
    case NoteActionTypes.GET_NOTES:
        return {
            ...state,
            loading: true
        }
    case NoteActionTypes.GET_NOTES_SUCCESS:
        return {
            ...state, 
            notes: action.payload,
            loading: false
        }
    case NoteActionTypes.GET_NOTES_FAIL:
        return {
            ...state, 
            error: action.payload,
            loading: false
        }
    default: 
        return state;
 }   
}