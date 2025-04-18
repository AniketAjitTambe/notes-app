import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserDataStoreService {
  userList: User[] = [
    { id: 'U-01', userName: 'AniketTambe', password: 'qwerty' },
    { id: 'U-02', userName: 'SavaniSawant', password: 'qwerty' },
  ];

  currentUser: User = this.userList[0];

  constructor() {}

  logout() {
    this.currentUser = { id: '', userName: '', password: '' };
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUserList() {
    return this.userList;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  addUser(user: User) {
    this.userList.push(user);
  }

  deleteUser(user: User) {
    this.userList = this.userList.splice(
      this.userList.findIndex((user) => {
        user.id !== user.id;
      }),
      1
    );
  }

  updateUser(updatedUser: User) {
    this.userList.forEach((user) => {
      if (user.id === updatedUser.id) {
        user = updatedUser;
      }
    });
  }
}
