import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './country.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getCountryList(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url + '/api/world/country/all');
  }
  updateCity(name:Country,id:number): Observable<any> {
    return this.http.put(this.url + '/api/city/'+id,name);
  }
  updateCountry(country:Country,code:string): Observable<any> {
    return this.http.put(this.url + '/api/country/'+code,country);
  }
}
