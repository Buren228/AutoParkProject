import {Component, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {CookieNames} from "../models/CookieNames";
import {Router} from "@angular/router";
import {CheckUserUtil} from "../utils/checkUserUtil";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private routes: Router,
              private cookies: CookieService,
              private checkUserUtil: CheckUserUtil,) {
  }

  ngOnInit(): void {
    this.checkUserUtil.checkUser();
  }

  deleteCookie() {
    this.cookies.deleteAll();
    this.routes.navigate(['auth']);
  }

  authVisible(): boolean {
    if (this.cookies.get(CookieNames.ROLE) == "admin" || this.cookies.get(CookieNames.ROLE) == "driver" || this.cookies.get(CookieNames.ROLE) == "controller" || this.cookies.get(CookieNames.ROLE) == "dispatcher")
      return false;
    else return true;
  }

  dBVisible(): boolean {
    if (this.cookies.get(CookieNames.ROLE) == "driver" || this.cookies.get(CookieNames.ROLE) == "controller")
      return false;
    else return true;
  }

  goToRoutesPage() {
    this.routes.navigate(['routes']);
  }
}
