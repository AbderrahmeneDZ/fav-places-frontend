import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Place } from '../models/placeModel';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getFavoriteLocations() {
    return this.http.get('http://localhost:3000/api/places', { headers: this.headers })
      .pipe(map(response => {
        return response['places']
      }));
  }

  postNewPlace(place: Place) {
    return this.http.post('http://localhost:3000/api/places/new', JSON.stringify(place), { headers: this.headers })
  }

  get headers() {
    return new HttpHeaders({
      'Authorization': this.bearerToken,
      'Content-Type': 'application/json; charset=utf-8'
    });
  }

  get bearerToken() {
    return `bearer ${AuthService.token}`
  }
}
