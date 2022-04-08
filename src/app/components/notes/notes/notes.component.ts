import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import Note from '../../../models/note.model';
import AppState from '../../../models/app-state.model';
import { GetNotesAction } from '../../../actions/notes.actions';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes$: Observable<Note[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.notes$ = this.store.select(store => store.note.notes);
    this.error$ = this.store.select(store => store.note.error);
    this.store.dispatch(new GetNotesAction());
  }

}
