import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {CookieNames} from "../models/CookieNames";
import {UserService} from "../services/user.service";
import {UserUtil} from "../utils/UserUtil";

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
              private checkUserUtil: UserUtil) {
  }

  ngOnInit(): void {

    this.fillUsers();
    this.checkUserUtil.checkUser();
    this.checkUserUtil.authAlready();

  }

  fillUsers() {
    this.userService.getAll().subscribe((data: User[]) => this.users = data);
  }

  findUser() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username == this.username && this.users[i].password == this.password) {
        this.cookies.set(CookieNames.USER, this.users[i].username);
        this.cookies.set(CookieNames.ROLE, this.users[i].job);
        this.cookies.set(CookieNames.ACTUAL_ROLE, this.users[i].job);
        this.cookies.set(CookieNames.USER_ID, this.users[i].id.toString());
        this.checkUserUtil.checkUser();
        this.routes.navigate(['menu'])
      }

    }

  }
}
