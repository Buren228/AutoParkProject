import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {CookieNames} from "../../../models/CookieNames";
import {BusesService} from "../../../services/bus.service";
import {Buses} from "../../../models/Buses";
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/Employee";

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
  newBus=new Buses();
flag:boolean=false;
  constructor(private routes: Router,
              private cookies: CookieService,
              private busesService: BusesService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.checkUser();
  }

  checkUser() {
    if (this.cookies.get(CookieNames.USER) == null && this.cookies.get(CookieNames.ROLE) == null)
      this.routes.navigate(['auth']);
    else if (this.cookies.get(CookieNames.ROLE) == "driver" || this.cookies.get(CookieNames.ROLE) == "controller") this.routes.navigate(['menu']);
  }

  goBackToMainMenu() {
    this.routes.navigate(['menu']);
  }

  goToEmployee() {
    this.routes.navigate(['emp']);
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
