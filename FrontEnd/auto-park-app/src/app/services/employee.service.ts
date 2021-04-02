import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";
import {Employee} from "../models/Employee";
import {EmployeeComponent} from "../data-base/Components/employee/employee.component";

@Injectable(
   {
   providedIn: 'root'
 }
)
export class EmployeeService {
  constructor (private http: HttpClient,
               ) {}

  public getEmp(first_name:string,last_name:string): Observable<any>{
    return this.http.get("http://localhost:8080/employee/"+first_name+"/"+last_name);
  }

  public getAll(): Observable<any>{
    return this.http.get("http://localhost:8080/employee/getAll");
  }

  public createEmp(employee:Employee): Observable<any>{
    return this.http.post("http://localhost:8080/employee/createNewEmployee/", employee);
   }

  public deleteEmp(employee:Employee): Observable<any>{
    return this.http.post("http://localhost:8080/employee/deleteEmployee/", employee);
  }
}
