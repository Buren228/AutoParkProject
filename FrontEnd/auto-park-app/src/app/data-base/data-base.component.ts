import { Component, OnInit } from '@angular/core';
import {CookieNames} from "../models/CookieNames";
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {UserUtil} from "../utils/UserUtil";

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.css']
})
export class DataBaseComponent implements OnInit {

  constructor(private routes:Router,
              private cookies: CookieService,
              private userUtil: UserUtil) { }

  ngOnInit(): void {
    this.userUtil.checkUser()
  }



  goBackToMainMenu() {
    this.routes.navigate(['menu']);
  }
 goToUsers(){
   this.routes.navigate(['users']);
 }
 goToBuses(){
   this.routes.navigate(['buses']);
 }
}
