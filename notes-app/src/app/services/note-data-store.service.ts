import { inject, Injectable } from '@angular/core';
import { NoteUIModel } from '../models/notes-model';
import { Observable, of } from 'rxjs';
import { not } from 'rxjs/internal/util/not';
import { NoteListItemComponent } from '../component/note/note-list-item/note-list-item.component';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class NoteDataStoreService {
  private utilityService = inject(UtilityService);
  notesList: NoteUIModel[] = [
    {
      id: this.utilityService.generateId('note'),
      title: 'Hello World!!!',
      body: 'Hey There, we trying something new.',
      timestamp: new Date().getTime().toLocaleString(),
      userId: 'U-01',
    },
    {
      id: this.utilityService.generateId('note'),
      title: 'Eminem',
      body: 'Still working',
      timestamp: new Date().getTime().toLocaleString(),
      userId: 'U-01',
    },
    {
      id: this.utilityService.generateId('note'),
      title: 'Hello World!!!',
      body: 'Hey There, we trying something new.',
      timestamp: new Date().getTime().toLocaleString(),
      userId: 'U-02',
    },
    {
      id: this.utilityService.generateId('note'),
      title: 'Dr Dre',
      body: 'Still working',
      timestamp: new Date().getTime().toLocaleString(),
      userId: 'U-02',
    },
    {
      id: this.utilityService.generateId('note'),
      title: 'Hello World!!!',
      body: 'Hey There, we trying something new.',
      timestamp: new Date().getTime().toLocaleString(),
      userId: 'U-03',
    },
    {
      id: this.utilityService.generateId('note'),
      title: '50 Cents',
      body: 'Still working',
      timestamp: new Date().getTime().toLocaleString(),
      userId: 'U-03',
    },
  ];

  getNotes(): Observable<NoteUIModel[]> {
    return of(this.notesList);
  }

  addNote(newNote: NoteUIModel): Observable<boolean> {
    let length = this.notesList.length;
    this.notesList.push(newNote);
    return of(this.notesList.length === length + 1 ? true : false);
  }

  updateNote(newNote: NoteUIModel) {
    let id = newNote.id;
    let flag = false;
    this.notesList.map((note) => {
      if (note.id === id) {
        note = newNote;
        flag = true;
      }
    });
    return of(flag);
  }

  deleteNote(id: string) {
    let oldLength = this.notesList.length;
    this.notesList.splice(
      this.notesList.findIndex((h) => h.id === id),
      1
    );
    return of(oldLength > this.notesList.length ? true : false);
  }
}
