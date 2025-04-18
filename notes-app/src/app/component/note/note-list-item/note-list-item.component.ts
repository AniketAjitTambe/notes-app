import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NoteUIModel } from '../../../models/notes-model';
import { NoteDataStoreService } from '../../../services/note-data-store.service';

@Component({
  selector: 'app-note-list-item',
  imports: [],
  templateUrl: './note-list-item.component.html',
  styleUrl: './note-list-item.component.css',
})
export class NoteListItemComponent implements OnInit {
  @Input() noteItem!: NoteUIModel;
  @Output() selectedNote = new EventEmitter<NoteUIModel>();
  @Output() removeNoteWithId = new EventEmitter<string>();
  constructor(private noteDataStoreService: NoteDataStoreService) {}
  ngOnInit(): void {}

  selectNote() {
    this.selectedNote.emit(this.noteItem);
  }

  deleteNote(id: string) {
    this.removeNoteWithId.emit(id);
  }
}
