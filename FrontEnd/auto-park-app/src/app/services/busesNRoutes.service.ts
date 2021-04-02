import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from "../models/Employee";
import {BusesNRoutes} from "../models/BusesNRoutes";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class BusesNRoutesService {

  constructor (private http: HttpClient,
  ) {}
  public getAll(): Observable<any>{
    return this.http.get("http://localhost:8080/bnr/getAll");
  }

  public createNewCom(busesNRoutes:BusesNRoutes): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin":"*"
      })
    };

    return this.http.post("http://localhost:8080/bnr/cr", busesNRoutes,httpOptions);
  }

  public deleteCom(busesNRoutes:BusesNRoutes): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin":"*"
      })
    };
    return this.http.post("http://localhost:8080/bnr/deleteCom", busesNRoutes,httpOptions);
  }

}
