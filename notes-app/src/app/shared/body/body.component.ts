import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NoteUIModel } from '../../models/notes-model';
import { NoteDataStoreService } from '../../services/note-data-store.service';
import { NoteListItemComponent } from '../../component/note/note-list-item/note-list-item.component';
import { ShowNoteComponent } from '../../component/note/show-note/show-note.component';
import { NoDataComponent } from '../no-data/no-data.component';
import { Router, RouterOutlet } from '@angular/router';
import { NoteFormComponent } from '../../component/note/note-form/note-form.component';

@Component({
  selector: 'app-body',
  imports: [RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
