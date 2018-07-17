import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  location: Location = {
    id: 1,
    city: 'New York',
    state: 'NY'
  };

  constructor() { }

  ngOnInit() {
  }

}
