import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Radio } from '../radio';
import { RadiosService } from '../radios.service';

@Component({
  selector: 'app-radios-list',
  templateUrl: './radios-list.component.html',
  styleUrls: ['./radios-list.component.css']
})
export class RadiosListComponent implements OnInit {

  radios:Radio[] = [];
  city: string;

  constructor(private radiosService:RadiosService, private route:ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {

    this.route.params.subscribe(routeParams => {
      this.city = routeParams.city;
      console.log('test city ' + this.city)
      // this.radios = this.radiosService.getRadios().filter(d => d.city == this.city);

      this.radiosService.getRadios().subscribe(
        (data:Radio[]) => {
          console.log(data);
          this.radios = data.filter(d => d.city==this.city);
        }
      );
    });


    
  }

  setCity(city) {
    this.city = city;
  }

}
