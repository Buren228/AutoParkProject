import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {CookieNames} from "../../../models/CookieNames";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";
import {UserUtil} from "../../../utils/UserUtil";


@Component({
  selector: 'app-employee',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  first_name: string;
  last_name: string;
 // newUser = new User();
  user: User[];
  oneUser: User;
  flag: boolean = false;

  constructor(private routes: Router,
              private cookies: CookieService,
              private userService: UserService,
              private userUtil: UserUtil,) {
  }


  ngOnInit(): void {
    this.getAll();
    this.userUtil.checkUser();
  }

  goBackToMainMenu() {
    this.routes.navigate(['menu']);
  }


  goToBuses() {
    this.routes.navigate(['buses']);
  }

  getAll() {
    this.userService.getAll().subscribe(
      x => {
        this.user = x;
      }
  );
    console.log(this.user);
  }
}
