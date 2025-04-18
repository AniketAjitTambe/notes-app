import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilityService } from '../../../services/utility.service';
import { NoteUIModel } from '../../../models/notes-model';
import { NoteDataStoreService } from '../../../services/note-data-store.service';
import { User } from '../../../models/user-model';

@Component({
  selector: 'app-note-form',
  imports: [ReactiveFormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css',
})
export class NoteFormComponent implements OnInit {
  @Input() currentUser!: User;
  noteFormGroup: FormGroup = new FormGroup({});

  constructor(
    private utilityService: UtilityService,
    private noteDataStoreService: NoteDataStoreService
  ) {}

  ngOnInit(): void {
    this.noteFormGroup = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
    });
  }

  onSubmit(data: NoteUIModel) {
    let newNote: NoteUIModel = {
      id: this.utilityService.generateId('Note'),
      userId: this.currentUser.id,
      title: data.title,
      body: data.body,
      timestamp: new Date().getTime().toLocaleString(),
    };
    this.noteDataStoreService.addNote(newNote).subscribe((status) => {
      console.log(
        status ? 'Succesfully added new note' : 'Failed to add new note'
      );
    });
  }
}
