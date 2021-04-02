import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {CookieNames} from "../models/CookieNames";
import {Router} from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private routes:Router,private cookies:CookieService) { }

  ngOnInit(): void {
    this.checkUser()
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

  dBVisible():boolean{
    if(this.cookies.get(CookieNames.ROLE)=="driver"||this.cookies.get(CookieNames.ROLE)=="controller")
      return false;
    else return true;
  }

  goToRoutesPage() {
    this.routes.navigate(['routes']);
  }

  checkUser(){
    if(this.cookies.get(CookieNames.USER)==null && this.cookies.get(CookieNames.ROLE)==null)
      this.routes.navigate(['auth']);
    else if(this.cookies.get(CookieNames.ROLE)=="admin")
      this.routes.navigate(['amenu']);
    else if(this.cookies.get(CookieNames.ROLE)=="dispatcher")
      this.routes.navigate(['dmenu']);
    else if(this.cookies.get(CookieNames.ROLE)=="driver"||this.cookies.get(CookieNames.ROLE)=="controller")  this.routes.navigate(['menu']);
    else this.routes.navigate(['auth']);
  }
}
