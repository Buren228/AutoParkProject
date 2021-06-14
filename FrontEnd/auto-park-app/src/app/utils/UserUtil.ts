import {Injectable} from "@angular/core";
import {CookieNames} from "../models/CookieNames";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {User} from "../models/User";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserUtil {

  constructor(private routes: Router,
              private cookies: CookieService,) {
  }

  checkUser() {
    if (this.cookies.get(CookieNames.USER) == null && this.cookies.get(CookieNames.ROLE) == null)
      this.routes.navigate(['auth']);
  }

  authAlready() {
    if (this.cookies.get(CookieNames.USER) !== "" && this.cookies.get(CookieNames.ROLE) !== "")
      this.routes.navigate(['menu'])
      }

  redirectUserWithRole(page: String, role: String[]) {
    for (let i = 0; i < role.length; i++) {
      if (this.cookies.get(CookieNames.ROLE) == role[i]) {
        this.routes.navigate([page]);
        break;
      }
      else this.routes.navigate(['error']);
    }

  }
  redirectUser(page: String) {
        this.routes.navigate([page]);
  }

  getUserSex(user:User){
    if(user.sex==1)return "Мужской"
    else if(user.sex==0) return "Женский"
    else return "undefined"
  }

  getUserStatus(user:User){
    if(user.status==1)return "Работает"
    else if(user.sex==0) return "Болеет"
    else return "undefined"
  }

  getUserBirthDay(user: User) {
    let date = new Date(user.birth_day)
    return date.toDateString();
  }
}
