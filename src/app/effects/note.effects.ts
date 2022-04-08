import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
        NoteActionTypes, 
        GetNotesAction,
        GetNotesSuccessAction,
        GetNotesFailAction,
        DeleteNoteAction,
        DeleteNoteSuccessAction,
        DeleteNoteFailAction,
        AddNoteAction,
        AddNoteSuccessAction,
        AddNoteFailAction
     } from '../actions/notes.actions'
import { NotesService } from '../services/notes.service';

@Injectable()
export class NoteEffects {

  @Effect() getNotes$ = this.actions$
    .pipe(
      ofType<GetNotesAction>(NoteActionTypes.GET_NOTES),
      mergeMap(
        () => this.service.getNotes()
          .pipe(
            map(data => {
                return new GetNotesSuccessAction(data)
            }),
            catchError(error => of(new GetNotesFailAction(error)))
          )
      ),
  )

  @Effect() deleteNote$ = this.actions$
    .pipe(
      ofType<DeleteNoteAction>(NoteActionTypes.DELETE_NOTE),
      mergeMap(
        (data) => this.service.deleteNote(data.payload)
          .pipe(
            map(data2 => {
                return new DeleteNoteSuccessAction(data.payload)
            }),
            catchError(error => of(new DeleteNoteFailAction(error)))
          )
      ),
  )

  @Effect() addNote$ = this.actions$
    .pipe(
      ofType<AddNoteAction>(NoteActionTypes.ADD_NOTE),
      mergeMap(
        (data) => this.service.addNote(data.payload)
          .pipe(
            map(data2 => {
                return new AddNoteSuccessAction(data.payload)
            }),
            catchError(error => of(new AddNoteFailAction(error)))
          )
      ),
  )

  constructor(
    private actions$: Actions,
    private service: NotesService
  ) { }
}