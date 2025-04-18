import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NoteUIModel } from '../../../models/notes-model';
import { UserDataStoreService } from '../../../services/user-data-store.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NoteDataStoreService } from '../../../services/note-data-store.service';
import { User } from '../../../models/user-model';

@Component({
  selector: 'app-show-note',
  imports: [FormsModule],
  templateUrl: './show-note.component.html',
  styleUrl: './show-note.component.css',
})
export class ShowNoteComponent implements OnInit, DoCheck {
  @Input() selectedNote!: NoteUIModel;
  @Input() currentUser!: User;
  @Output() deleteNoteWithId = new EventEmitter<string>();
  isEditable: boolean = false;
  userName!: string;

  tempNote: NoteUIModel = {
    id: '',
    title: '',
    body: '',
    timestamp: '',
    userId: '',
  };

  constructor(private noteDataStoreService: NoteDataStoreService) {}

  ngOnInit() {
    this.setNote();
  }

  ngDoCheck(): void {
    this.setNote();
  }

  setNote() {
    this.tempNote = this.selectedNote;
    this.userName = this.currentUser.userName;
  }

  toggleEdit() {
    this.isEditable = true;
  }

  saveNote() {
    this.tempNote.timestamp = new Date().getTime().toLocaleString();
    this.noteDataStoreService.updateNote(this.tempNote).subscribe((data) => {
      console.log(data ? 'Updated' : 'Update Failed');
      this.isEditable = false;
    });
  }

  deleteNote(id: string) {
    this.deleteNoteWithId.emit(id);
  }
}
