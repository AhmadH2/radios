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
  radios: Radio[] = [new Radio('Quran', 'Nablus', 'http://www.quran-radio.org:8080/;stream.mp3',
    'http://www.quran-radio.com/images/logo.gif', 'Quran recitation')];

  getRadios():Radio[] {
    return this.radios;
  }

  getCities(): Observable<Object> {
    return this.http.get('https://countriesnow.space/api/v0.1/countries/population/cities')
  }
}
