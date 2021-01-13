import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Radio } from './radio';

@Injectable({
  providedIn: 'root'
})
export class RadiosService {

  constructor(private http: HttpClient) { }

  cites:string[];

  getCities(): Observable<Object> {
    return this.http.get('https://raw.githubusercontent.com/David-Haim-zz/CountriesToCitiesJSON/master/countriesToCities.json');
  }

  getRadios(): Observable<Object> {
    return this.http.get('assets/radios.data.json');
  }
}
