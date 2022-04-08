import { Action } from '@ngrx/store';
import Note from '../models/note.model';

export enum NoteActionTypes {
    ADD_NOTE = '[NOTE] Add Note',
    ADD_NOTE_SUCCESS = '[NOTE] Add Note Success',
    ADD_NOTE_FAIL = '[NOTE] Add Note Fail',
    
    GET_NOTES = '[NOTE] Get Notes',
    GET_NOTES_SUCCESS = '[NOTE] Get Notes Success',
    GET_NOTES_FAIL = '[NOTE] Get Notes Fail',

    DELETE_NOTE = '[NOTE] Delete Note',
    DELETE_NOTE_SUCCESS = '[NOTE] Delete Note Success',
    DELETE_NOTE_FAIL = '[NOTE] Delete Note Fail',
}

/*
** Get Notes
**/
export class GetNotesAction implements Action {
    readonly type = NoteActionTypes.GET_NOTES;
}

export class GetNotesSuccessAction implements Action {
    readonly type = NoteActionTypes.GET_NOTES_SUCCESS;
    constructor(public payload: Note[]){}
}

export class GetNotesFailAction implements Action {
    readonly type = NoteActionTypes.GET_NOTES_FAIL;
    constructor(public payload: any) {}
}

/*
** End - Get Notes
**/


/*
** Add Note
**/
export class AddNoteAction implements Action {
    readonly type = NoteActionTypes.ADD_NOTE;
    constructor(public payload: Note){}
}

export class AddNoteSuccessAction implements Action {
    readonly type = NoteActionTypes.ADD_NOTE_SUCCESS;
    constructor(public payload: Note){}
}

export class AddNoteFailAction implements Action {
    readonly type = NoteActionTypes.ADD_NOTE_FAIL;
    constructor(public payload: any){}
}

/*
** End - Add Note
**/


/*
** Delete Note
**/
export class DeleteNoteAction implements Action {
    readonly type = NoteActionTypes.DELETE_NOTE;
    constructor(public payload: number){}
}

export class DeleteNoteSuccessAction implements Action {
    readonly type = NoteActionTypes.DELETE_NOTE_SUCCESS;
    constructor(public payload: string | any){}
}

export class DeleteNoteFailAction implements Action {
    readonly type = NoteActionTypes.DELETE_NOTE_FAIL;
    constructor(public payload: any){}
}

/*
** End - Delete Note
**/

export type NoteAction = 
    AddNoteAction | 
    AddNoteSuccessAction |
    AddNoteFailAction |
    DeleteNoteAction |
    DeleteNoteSuccessAction |
    DeleteNoteFailAction |
    GetNotesAction |
    GetNotesSuccessAction |
    GetNotesFailAction;