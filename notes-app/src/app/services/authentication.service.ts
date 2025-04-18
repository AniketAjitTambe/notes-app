import { Injectable } from '@angular/core';
import { UserDataStoreService } from './user-data-store.service';
import { User } from '../models/user-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private userDataStoreService: UserDataStoreService) {}

  authenticate(userName: string, password: string): User | boolean {
    let flag: boolean = false;
    let result!: User;
    this.userDataStoreService.getUserList().forEach((user) => {
      if (user.userName === userName && user.password === password) {
        flag = true;
        result = user;
      }
    });
    console.log('flag:', flag, result);
    return flag ? result : flag;
  }
}
