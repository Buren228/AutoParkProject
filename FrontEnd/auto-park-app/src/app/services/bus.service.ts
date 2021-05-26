import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Buses} from "../models/Buses";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class BusesService {
  private BusServiceURL = "http://localhost:8080/buses/";

  constructor(private http: HttpClient,
  ) {
  }

  public getBus(number: string): Observable<Buses> {
    return this.http.get<Buses>(this.BusServiceURL + number);
  }

  public getAll(): Observable<Buses[]> {
    return this.http.get<Buses[]>(this.BusServiceURL+"getAll");
  }

  public createBus(bus: Buses): Observable<any> {
    return this.http.post("http://localhost:8080/buses/createNewBus/", bus);
  }

  public deleteBus(bus: Buses): Observable<any> {
    return this.http.post("http://localhost:8080/buses/deleteBus/", bus);
  }
}
