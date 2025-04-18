import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit {
  @Input('trips') trips: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  public editTrip(trips: Trip) {
  localStorage.removeItem('tripCode');
  localStorage.setItem('tripCode', trips.code);
  this.router.navigate(['edit-trip']);
  }
}