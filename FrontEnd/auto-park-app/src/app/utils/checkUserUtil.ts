import {Injectable} from "@angular/core";
import {CookieNames} from "../models/CookieNames";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CheckUserUtil {

  constructor(private routes: Router, private cookies: CookieService){}

  checkUser(){
      if (this.cookies.get(CookieNames.USER) == null && this.cookies.get(CookieNames.ROLE) == null)
        this.routes.navigate(['auth']);
  }
}
