import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";
import {Employee} from "../models/Employee";
import {Route} from "../models/Route";


@Injectable(
  {
    providedIn: 'root'
  }
)
export class StopsService {
  constructor (private http: HttpClient,
  ) {}

  public getRouteByNumber(number:number): Observable<any>{
    return this.http.get("http://localhost:8080/stops/"+number);
  }

  public getAllStops(): Observable<any>{
    return this.http.get("http://localhost:8080/stops/getAllRoutes");
  }
  public createStop(stop:Route): Observable<any>{
    return this.http.post("http://localhost:8080/stops/createNewStop/", stop);
  }

  public deleteStop(stop:Route): Observable<any>{
    return this.http.post("http://localhost:8080/stops/deleteStop/", stop);
  }
}
