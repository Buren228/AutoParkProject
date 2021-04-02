import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {CookieNames} from "../../../models/CookieNames";
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/Employee";



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
 first_name:string;
 last_name:string;
 newEmployee=new Employee();
employee:Employee[];
oneEmployee:Employee;
flag:boolean=false;
  constructor(private routes:Router,
              private cookies: CookieService,
              private employeeService:EmployeeService) { }



  ngOnInit(): void {
    this.getAll();
    this.checkUser();
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

   getEmployeeByName() {
    this.employeeService.getEmp(this.first_name,this.last_name).subscribe(
      x => {
        this.oneEmployee = x;
      }
    );
    this.flag=true;
  }

  getAll() {
    this.employeeService.getAll().subscribe(
      x => {
        this.employee = x;
      }
    );
  }

  createEmployee(){
    this.employeeService.createEmp(this.newEmployee).subscribe(
      x=>{
        console.log(x);
        this.getAll();
      },error => {
        console.log(error);
      }
    )
  }
}
