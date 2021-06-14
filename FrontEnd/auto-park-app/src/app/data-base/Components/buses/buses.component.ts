import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {CookieNames} from "../../../models/CookieNames";
import {BusesService} from "../../../services/bus.service";
import {Buses} from "../../../models/Buses";
import {UserService} from "../../../services/user.service";
import {Employee} from "../../../models/Employee";
import {UserUtil} from "../../../utils/UserUtil";

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css'],
  providers:[BusesService]
})
export class BusesComponent implements OnInit {
  buses: Buses[];
  bus:Buses;
  number:string;
  newBus:Buses;
flag:boolean=false;
  constructor(private routes: Router,
              private cookies: CookieService,
              private busesService: BusesService,
              private userUtil: UserUtil,) {
  }

  ngOnInit(): void {
    this.getAll();
    this.userUtil.checkUser();
  }

  goBackToMainMenu() {
    this.routes.navigate(['menu']);
  }

  goToUsers() {
    this.routes.navigate(['user']);
  }

  goToBuses() {
    this.routes.navigate(['buses']);
  }

  getBusByNumber() {
    this.busesService.getBus(this.number).subscribe(
      x => {
        this.bus = x;
        this.flag=true;
      }
    );
  }

  getAll() {
    this.busesService.getAll().subscribe(
      x => {
        this.buses = x;
      }
    );

  }

  createBus(){
    this.busesService.createBus(this.newBus).subscribe(
      x=>{
        console.log(x);
        this.getAll();
      },error => {
        console.log(error);
        })
  }
}
