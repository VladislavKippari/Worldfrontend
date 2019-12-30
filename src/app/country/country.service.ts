import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './country.model';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'http://localhost:5500';

  constructor(private http: HttpClient) { }
  getCountryList(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url + '/api/world/country/all');
  }
}
