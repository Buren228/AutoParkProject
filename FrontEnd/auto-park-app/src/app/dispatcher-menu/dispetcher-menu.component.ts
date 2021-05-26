import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";
import {CookieNames} from "../models/CookieNames";
import {CheckUserUtil} from "../utils/checkUserUtil";

@Component({
  selector: 'app-dispetcher-menu',
  templateUrl: './dispatcher-menu.component.html',
  styleUrls: ['./dispatcher-menu.component.css']
})
export class DispetcherMenuComponent implements OnInit {

  constructor(private routes:Router,
              private cookies: CookieService,
              private checkUserUtil: CheckUserUtil,) { }

  ngOnInit(): void {
    this.checkUserUtil.checkUser();
  }

  deleteCookie() {
    this.cookies.deleteAll();
    this.routes.navigate(['auth']);
  }

  goToDataBasePage() {
    this.routes.navigate(['db']);
  }

  goToRoutesPage() {
    this.routes.navigate(['routes']);
  }

  authVisible() :boolean{
    if(this.cookies.get(CookieNames.ROLE)=="admin"||this.cookies.get(CookieNames.ROLE)=="driver"||this.cookies.get(CookieNames.ROLE)=="controller"||this.cookies.get(CookieNames.ROLE)=="dispatcher")
      return false;
    else return true;
  }
}
