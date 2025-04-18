import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataStoreService } from '../../services/user-data-store.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() navigateToPage = new EventEmitter<string>();

  constructor(
    private router: Router,
    private userDataStoreService: UserDataStoreService
  ) {}

  navigateTo(page: string) {
    // this.navigateToPage.emit(page);
    this.router.navigate([`/${page}`]);
  }

  logout() {
    this.userDataStoreService.logout();
    this.router.navigate(['/login']);
  }
}
