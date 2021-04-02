import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/Employee";
import {Buses} from "../models/Buses";

@Injectable(
  {
  providedIn: 'root'
}
)
export class BusesService {

  constructor(private http: HttpClient) { }

  public getBus(number:string): Observable<any>{
    return this.http.get("http://localhost:8080/buses/"+number);
  }

  public getAll(): Observable<any>{
    return this.http.get("http://localhost:8080/buses/getAll");
  }
  public createBus(bus:Buses): Observable<any>{
    return this.http.post("http://localhost:8080/buses/createNewBus/", bus);
  }

  public deleteBus(bus:Buses): Observable<any>{
    return this.http.post("http://localhost:8080/buses/deleteBus/", bus);
  }
}
