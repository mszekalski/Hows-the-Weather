import { Component, OnInit } from "@angular/core";

import { Location } from "../location";
import { LocationService } from "../location.service";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.component.html",
  styleUrls: ["./locations.component.css"]
})
export class LocationsComponent implements OnInit {
  selectedLocation: Location;
  locations: Location[];
  city: any;
  state: any;
  currentTemp: any;
  description: any;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.getLocations();
  }

  onSelect(location: Location): void {
    this.selectedLocation = location;

    let apiUrl = `https://api.weatherbit.io/v2.0/current?key=183ce6c2f97a446bad51b08f47e8e763&city=${
      this.selectedLocation.city
    },${this.selectedLocation.state}`;

    this.weatherService.getData(apiUrl).subscribe(data => {
      this.city = data.data[0].city_name;
      this.state = data.data[0].state_code;
      this.currentTemp = data.data[0].temp;
      this.description = data.data[0].weather.description;
    });
  }

  delete(location: location): void {
    this.locations = this.locations.filter(h => h !== location);
    this.locationService.deletelocation(location).subscribe();
  }

  getLocations(): void {
    this.locationService
      .getLocations()
      .subscribe(locations => (this.locations = locations));
  }

  add(city: string, state: string): void {
    let apiUrl = `https://api.weatherbit.io/v2.0/current?key=183ce6c2f97a446bad51b08f47e8e763&city=${city},${state}`;

    this.weatherService.getData(apiUrl).subscribe(data => {
      this.currentTemp = data.data[0].temp;
      this.city = data.data[0].city_name;
      this.state = data.data[0].state_code;
      this.currentTemp = data.data[0].temp;
      this.description = data.data[0].weather.description;
    });

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
