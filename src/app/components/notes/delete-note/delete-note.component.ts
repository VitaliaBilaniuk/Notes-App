import { Component, OnInit, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import AppState from '../../../models/app-state.model';
import {DeleteNoteAction} from '../../../actions/notes.actions';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.scss']  
})
export class DeleteNoteComponent implements OnInit {

  @Input()
  index: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  deleteNote(){
    this.store.dispatch(new DeleteNoteAction(this.index));
  }

}
