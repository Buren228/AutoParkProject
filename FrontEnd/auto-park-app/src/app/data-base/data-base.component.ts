import { Component, OnInit } from '@angular/core';
import {CookieNames} from "../models/CookieNames";
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styleUrls: ['./data-base.component.css']
})
export class DataBaseComponent implements OnInit {

  constructor(private routes:Router,private cookies: CookieService) { }

  ngOnInit(): void {
    this.checkUser()
  }

  checkUser(){
    if(this.cookies.get(CookieNames.USER)==null && this.cookies.get(CookieNames.ROLE)==null)
      this.routes.navigate(['auth']);
    else if(this.cookies.get(CookieNames.ROLE)=="driver"||this.cookies.get(CookieNames.ROLE)=="controller")  this.routes.navigate(['menu']);
  }

  goBackToMainMenu() {
    this.routes.navigate(['menu']);
  }
 goToEmployee(){
   this.routes.navigate(['emp']);
 }
 goToBuses(){
   this.routes.navigate(['buses']);
 }
}
