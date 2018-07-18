import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LocationsComponent } from "./locations/locations.component";

import { FormsModule } from "@angular/forms";
import { LocationDetailComponent } from "./location-detail/location-detail.component";
import { MessagesComponent } from "./messages/messages.component";

import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocationDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
