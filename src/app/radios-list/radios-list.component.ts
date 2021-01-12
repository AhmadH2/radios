import { Component, OnInit } from '@angular/core';
import { Radio } from '../radio';
import { RadiosService } from '../radios.service';

@Component({
  selector: 'app-radios-list',
  templateUrl: './radios-list.component.html',
  styleUrls: ['./radios-list.component.css']
})
export class RadiosListComponent implements OnInit {

  radios:Radio[];

  constructor(private radiosService:RadiosService) { }

  ngOnInit(): void {
    this.radios = this.radiosService.getRadios();
    console.log(this.radios[0].name);
  }

}
