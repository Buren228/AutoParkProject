import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {CookieNames} from "../models/CookieNames";
import {UserService} from "../services/user.service";
import {CheckUserUtil} from "../utils/checkUserUtil";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  users: User[] = [];
  username: string;
  password: string;


  constructor(private routes: Router,
              private cookies: CookieService,
              private userService: UserService,
              private checkUserUtil: CheckUserUtil) {
  }

  ngOnInit(): void {

    this.fillUsers();
    this.checkUserUtil.checkUser();


  }

  fillUsers() {
    this.userService.getAll().subscribe((data: User[]) => this.users = data);
    // this.users[0]=new User(1,"admin","admin",Roles.ADMIN)
    // this.users[1]=new User(2,"ivan","password",Roles.DISPATCHER)
    // this.users[2]=new User(3,"dmitry","password",Roles.DISPATCHER)
    // this.users[3]=new User(4,"angela","password",Roles.CONTROLLER)
    // this.users[4]=new User(5,"sergey","password",Roles.DRIVER)
    // this.users[5]=new User(6,"valera","password",Roles.DRIVER)
    // this.users[6]=new User(7,"vladimir","password",Roles.DRIVER)
    // this.users[7]=new User(8,"andrey","password",Roles.DRIVER)
    // this.users[8]=new User(9,"evgeny","password",Roles.CONTROLLER)
    // this.users[9]=new User(10,"konstantin","password",Roles.CONTROLLER)
    // this.users[10]=new User(11,"boris","password",Roles.CONTROLLER)

  }

  findUser() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username == this.username && this.users[i].password == this.password) {
        this.cookies.set(CookieNames.USER, this.users[i].username);
        this.cookies.set(CookieNames.ROLE, this.users[i].job);
        this.checkUserUtil.checkUser();
      }

    }

  }

  authVisible(): boolean {
    if (this.cookies.get(CookieNames.ROLE) == "admin" || this.cookies.get(CookieNames.ROLE) == "driver" || this.cookies.get(CookieNames.ROLE) == "controller" || this.cookies.get(CookieNames.ROLE) == "dispatcher")
      return false;
    else return true;
  }
}
