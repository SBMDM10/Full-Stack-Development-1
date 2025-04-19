import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(
    private authenticationService: AuthenticationService
  ) {}

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
