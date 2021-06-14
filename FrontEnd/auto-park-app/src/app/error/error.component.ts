import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {UserUtil} from "../utils/UserUtil";
import {Roles} from "../models/Roles";
import {RoleService} from "../services/role.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private routes: Router,
              private cookies: CookieService,
              private userUtil: UserUtil,
              private roleService: RoleService) { }

  ngOnInit(): void {
  }

  disconnect() {
    this.cookies.deleteAll();
    this.routes.navigate(['auth']);
  }

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
