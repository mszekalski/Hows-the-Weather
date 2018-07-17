import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LocationsComponent } from "./locations/locations.component";

import { FormsModule } from "@angular/forms";
import { LocationDetailComponent } from './location-detail/location-detail.component';

@NgModule({
  declarations: [AppComponent, LocationsComponent, LocationDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
