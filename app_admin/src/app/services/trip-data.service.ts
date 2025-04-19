import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage) {}
  url = 'http://localhost:3000/api/trips';
  private authUrl = 'http://localhost:3000/api';

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.authUrl}/${urlPath}`;
    return firstValueFrom(this.http.post<AuthResponse>(url, user))
      .then(response => {
        if (!response) {
          return Promise.reject('No response from server');
        }
        return response;
      })
      .catch(this.handleError);
  }
}