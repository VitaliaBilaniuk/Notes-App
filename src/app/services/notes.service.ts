import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Note from '../models/note.model';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get<Note[]>(`${this.baseUrl}/todos?_limit=10`);
  }
  
  addNote(note: Note){
    return this.http.post<Note | any>(`${this.baseUrl}/todos`, note);
  }

  deleteNote(id: Number){
    return this.http.delete<any>(`${this.baseUrl}/todos/${id}`);
  }
}
