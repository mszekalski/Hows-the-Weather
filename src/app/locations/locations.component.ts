import { Component, OnInit } from "@angular/core";
import { Location } from "../location";
import { LOCATIONS } from "../mock-locations";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.component.html",
  styleUrls: ["./locations.component.css"]
})
export class LocationsComponent implements OnInit {
  locations = LOCATIONS;

  selectedLocation: Location;

  constructor() {}

  ngOnInit() {}

  onSelect(location: Location): void {
    this.selectedLocation = location;
  }
}
