import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {UserUtil} from "../utils/UserUtil";
import {Roles} from "../models/Roles";
import {CookieNames} from "../models/CookieNames";
import {RoleService} from "../services/role.service";
import {User} from "../models/User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  role = this.cookies.get(CookieNames.ROLE);
  myRole = this.cookies.get(CookieNames.ROLE);

  user:User;

  date:Date=new Date("1998-03-20")

  constructor(private routes: Router,
              private cookies: CookieService,
              public userUtil: UserUtil,
              private roleService: RoleService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  roleSwitchVisible(){
    if(this.cookies.get(CookieNames.ACTUAL_ROLE)=="admin")
      return true;
    else return false;
  }

  switchRole() {
    this.cookies.set(CookieNames.ROLE ,this.role)
    this.myRole = this.cookies.get(CookieNames.ROLE);
  }

  getUserInfo(){
    this.userService.getUser(this.cookies.get(CookieNames.USER_ID)).subscribe(
      x => {
          this.user = x;}
    );
  }

  goBackToMainMenu() {
    this.userUtil.redirectUser("menu")
  }

  goToDataBasePage(){
    this.userUtil.redirectUserWithRole("db",this.roleService.dbRoles)
  }

  goToRoutesPage() {
    this.userUtil.redirectUserWithRole("routes",this.roleService.routeViewRoles)
  }


}
