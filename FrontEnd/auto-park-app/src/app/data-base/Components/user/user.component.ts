import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {CookieNames} from "../../../models/CookieNames";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";
import {CheckUserUtil} from "../../../utils/checkUserUtil";


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
              private checkUserUtil: CheckUserUtil) {
  }


  ngOnInit(): void {
    this.getAll();
    this.checkUserUtil.checkUser();
  }

  goBackToMainMenu() {
    this.routes.navigate(['menu']);
  }

  goToUser() {
    this.routes.navigate(['user']);
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

  // createUser() {
  //   this.userService.createUser(this.newUser).subscribe(
  //     x => {
  //       console.log(x);
  //       this.getAll();
  //     }, error => {
  //       console.log(error);
  //     }
  //   )
  // }
}
