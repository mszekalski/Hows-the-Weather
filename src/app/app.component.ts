import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Hows the Weather?";
  private apiUrl = "https://api.weatherbit.io/v2.0/";
  data: any = {};

  constructor(private http: Http) {
    console.log("hello");
    this.getWeather();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }

  getWeather() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
