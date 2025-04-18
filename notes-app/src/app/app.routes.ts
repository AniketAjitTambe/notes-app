import { Routes } from '@angular/router';
import { NoteFormComponent } from './component/note/note-form/note-form.component';
import { NotesComponent } from './component/note/notes.component';
import { UserComponent } from './component/user/user.component';
import { UserLoginComponent } from './component/user/user-login/user-login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'user', component: UserComponent },
];
