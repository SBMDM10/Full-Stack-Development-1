import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from
'../services/authentication.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { TripListingComponent } from '../trip-listing/trip-listing.component';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
constructor(
 private authenticationService: AuthenticationService,
 //private tripListingComponent: TripListingComponent
) { }
ngOnInit() { }
public isLoggedIn(): boolean {
 return this.authenticationService.isLoggedIn();
 }
public onLogout(): void {
 return this.authenticationService.logout();
 }
} 