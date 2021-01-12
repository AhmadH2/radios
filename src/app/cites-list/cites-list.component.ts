import { Component, OnInit } from '@angular/core';
import { RadiosService } from '../radios.service';

@Component({
  selector: 'app-cites-list',
  templateUrl: './cites-list.component.html',
  styleUrls: ['./cites-list.component.css']
})
export class CitesListComponent implements OnInit {

  constructor(private radiosService:RadiosService) { }

  cities: string[];

  ngOnInit(): void {
    this.radiosService.getCities().subscribe(
      (data) => {
        this.cities = data["data"].filter(d => d["country"] == 'State of Palestine').map(d=> d['city']);
        console.log(JSON.stringify(this.cities[0]));
      }
    );
  }

}
