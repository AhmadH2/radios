import { Component, Input, OnInit } from '@angular/core';
import { Radio } from '../radio';

@Component({
  selector: 'app-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.css']
})
export class RadioItemComponent implements OnInit {

  @Input()
  radio:Radio;

  constructor() { }

  ngOnInit(): void {

  }

}
