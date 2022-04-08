import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import AppState from '../../../models/app-state.model';
import Note from '../../../models/note.model';
import {AddNoteAction, NoteAction} from '../../../actions/notes.actions';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  note: Note = {
    id: null,
    userId: null,
    title: '',
    body: ''
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { 
  }

  createNote(){
    this.note.id = Math.floor(Math.random() * 10);
    this.note.userId =  Math.floor(Math.random() * 100);
    this.store.dispatch(new AddNoteAction({...this.note}));
    this.note.title = '';
    this.note.body = '';
  }

}
