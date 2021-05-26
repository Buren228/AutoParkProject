import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {Employee} from "../models/Employee";
import {User} from "../models/User";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserService {
  private UserServiceURL = "http://localhost:8080/user/";

  constructor(private http: HttpClient,
  ) {
  }

  public getUser(id): Observable<User> {
    return this.http.get<User>(this.UserServiceURL + id);
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.UserServiceURL + "getAll");
  }

  public createUser(employee: Employee): Observable<any> {
    return this.http.post("http://localhost:8080/employee/createNewEmployee/", employee);
  }

  public deleteUser(id): Observable<any> {
    return this.http.delete(this.UserServiceURL + id);
  }
}
