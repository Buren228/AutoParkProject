import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from "../models/Employee";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RouteService {
  constructor (private http: HttpClient,
  ) {}
  public getAll(): Observable<any>{
    return this.http.get("http://localhost:8080/routes/getAll");
  }
}
