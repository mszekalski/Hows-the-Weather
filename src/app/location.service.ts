import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Location } from "./location";
import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class LocationService {
  private locationsUrl = "api/locations";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationsUrl).pipe(
      tap(locations => this.log("fetched locations")),
      catchError(this.handleError("getLocations", []))
    );
  }

  addLocation(location: Location): Observable<Location> {
    return this.http
      .post<Location>(this.locationsUrl, location, httpOptions)
      .pipe(
        tap((location: Location) =>
          this.log(`added location w/ id=${location.id}`)
        ),
        catchError(this.handleError<Location>("addLocation"))
      );
  }

  deleteLocation(location: Location | number): Observable<Location> {
    const id = typeof location === "number" ? location : location.id;
    const url = `${this.locationsUrl}/${id}`;

    return this.http.delete<Location>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted location id=${id}`)),
      catchError(this.handleError<Location>("deleteLocation"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`LocationService: ${message}`);
  }
}
