import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {CookieNames} from "../models/CookieNames";
import {UserUtil} from "../utils/UserUtil";

// @ts-ignore
@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  constructor(private routes:Router,
              private cookies: CookieService,
              private checkUserUtil: UserUtil,) { }

  ngOnInit(): void {
    this.checkUserUtil.checkUser();
  }

  goToDataBasePage() {
    this.routes.navigate(['db']);
  }

  goToRoutesPage() {
    this.routes.navigate(['routes']);
  }

  deleteCookie() {
    this.cookies.deleteAll();
    this.routes.navigate(['auth']);
  }

  authVisible() :boolean{
    if(this.cookies.get(CookieNames.ROLE)=="admin"||this.cookies.get(CookieNames.ROLE)=="driver"||this.cookies.get(CookieNames.ROLE)=="controller"||this.cookies.get(CookieNames.ROLE)=="dispatcher")
      return false;
    else return true;
  }
}
