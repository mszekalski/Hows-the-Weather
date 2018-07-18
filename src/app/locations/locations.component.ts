import { Component, OnInit } from "@angular/core";

import { Location } from "../location";
import { LocationService } from "../location.service";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.component.html",
  styleUrls: ["./locations.component.css"]
})
export class LocationsComponent implements OnInit {
  selectedLocation: Location;

  locations: Location[];

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.getLocations();
  }

  onSelect(location: Location): void {
    this.selectedLocation = location;
  }

  getLocations(): void {
    this.locationService
      .getLocations()
      .subscribe(locations => (this.locations = locations));
  }

  add(city: string, state: string): void {
    city = city.trim();
    state = state.trim();
    if (!city || !state) {
      return;
    }
    this.locationService
      .addLocation({ city, state } as Location)
      .subscribe(location => {
        this.locations.push(location);
      });
  }
}
