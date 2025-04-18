import { Component, OnInit } from '@angular/core';
import { UserDataStoreService } from '../../services/user-data-store.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user-model';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  currentUser!: User;
  editUser: boolean = false;
  userEditForm: FormGroup = new FormGroup({});
  constructor(private userDataStoreService: UserDataStoreService) {}

  ngOnInit() {
    this.currentUser = this.userDataStoreService.getCurrentUser();
    this.userEditForm = new FormGroup({
      userName: new FormControl(''),
    });
  }

  submitUserEditForm(data: { userName: string }) {
    this.currentUser.userName = data.userName;
    this.userDataStoreService.updateUser(this.currentUser);
    this.editUser = false;
  }

  toggleEdit() {
    this.editUser = true;
  }
}
