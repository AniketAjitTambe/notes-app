import { Component, Input, OnInit } from '@angular/core';
import { NoteUIModel } from '../../models/notes-model';
import { NoteDataStoreService } from '../../services/note-data-store.service';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { ShowNoteComponent } from './show-note/show-note.component';
import { User } from '../../models/user-model';
import { UserDataStoreService } from '../../services/user-data-store.service';

@Component({
  selector: 'app-notes',
  imports: [NoteListItemComponent, NoteFormComponent, ShowNoteComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent implements OnInit {
  @Input() noteList!: NoteUIModel[];
  selectedNote!: NoteUIModel | null;
  addNewNoteFlag: boolean = false;
  currentUser!: User;
  constructor(
    private noteDataStoreService: NoteDataStoreService,
    private userDataStoreService: UserDataStoreService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.userDataStoreService.getCurrentUser();
    this.setNoteList();
  }

  setNoteList() {
    this.noteDataStoreService.getNotes().subscribe((data) => {
      this.noteList = [];
      data.forEach((note) => {
        if (note.userId === this.currentUser.id) {
          this.noteList.push(note);
        }
      });
    });
  }

  showNote(note: NoteUIModel = this.noteList[0]) {
    this.selectedNote = note;
  }

  addNewNote() {
    this.addNewNoteFlag = true;
  }

  deleteNote(id: string) {
    this.noteDataStoreService.deleteNote(id).subscribe((data) => {
      console.log(data, 'for ', this.noteList);
      if (data) {
        this.selectedNote = this.noteList[0];
        this.showNote();
      } else {
        console.log('Failed to delete');
      }
    });
  }
}
