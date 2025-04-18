import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../models/user-model';
import { UserDataStoreService } from '../../../services/user-data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent implements OnInit {
  userLoginForm: FormGroup = new FormGroup({});

  constructor(
    private authenticationService: AuthenticationService,
    private userDataStoreService: UserDataStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(data: { userName: string; password: string }) {
    let result: User | boolean = this.authenticationService.authenticate(
      data.userName,
      data.password
    );
    if (result !== false) {
      this.userDataStoreService.setCurrentUser(result as User);
      this.router.navigate(['notes']);
    }
  }
}
