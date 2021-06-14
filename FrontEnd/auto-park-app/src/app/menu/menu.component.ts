import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {CookieNames} from "../models/CookieNames";
import {Router} from "@angular/router";
import {UserUtil} from "../utils/UserUtil";
import {Roles} from "../models/Roles";
import {RoleService} from "../services/role.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dbRoles:String[]=["admin","dispatcher"];

  constructor(private routes: Router,
              private cookies: CookieService,
              private userUtil: UserUtil,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.userUtil.checkUser();
  }

  disconnect() {
    this.cookies.deleteAll();
    this.routes.navigate(['auth']);
  }

  // authVisible(): boolean {
  //   if (this.cookies.get(CookieNames.ROLE) == "admin" || this.cookies.get(CookieNames.ROLE) == "driver" || this.cookies.get(CookieNames.ROLE) == "controller" || this.cookies.get(CookieNames.ROLE) == "dispatcher")
  //     return false;
  //   else return true;
  // }
  //
  // dBVisible(): boolean {
  //   if (this.cookies.get(CookieNames.ROLE) == "driver" || this.cookies.get(CookieNames.ROLE) == "controller")
  //     return false;
  //   else return true;
  // }

  goToProfile(){
    this.userUtil.redirectUser("profile")
  }

  goToDataBasePage(){
    this.userUtil.redirectUserWithRole("db",this.roleService.dbRoles)
  }

  goToRoutesPage() {
    this.userUtil.redirectUserWithRole("routes",this.roleService.routeViewRoles)
  }
}
