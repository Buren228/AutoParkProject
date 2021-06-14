import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {CookieNames} from "../models/CookieNames";
import {Route} from "../models/Route";
import {StopsService} from "../services/stops.service";
import {Stops} from "../models/Stops";
import {RouteService} from "../services/route.service";
import {PassengerTrafficHourService} from "../services/PassengerTrafficHour.service";
import {Passenger_traffic_hour} from "../models/Passenger_traffic_hour";
import {BusesNRoutes} from "../models/BusesNRoutes";
import {BusesNRoutesService} from "../services/busesNRoutes.service";
import {formatDate } from '@angular/common';
import {formatI18nPlaceholderName} from "@angular/compiler/src/render3/view/i18n/util";
import {Buses} from "../models/Buses";
import {BusesService} from "../services/bus.service";
import {UserUtil} from "../utils/UserUtil";


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  number:number;
  stops:Stops[];
  routes:Route[];
  oneRoute:Stops[];
  traffic:Passenger_traffic_hour[];
  busesNRoutes:BusesNRoutes[];
  time=new Date();
  hour:number;
  flag:boolean=false;
  busesCount:number[]=[5,5,7];
  newCom=new BusesNRoutes();
  buses:Buses[];
  constructor(private router:Router,
              private cookies: CookieService,
              private stopsService:StopsService,
              private routeService:RouteService,
              private passengerTrafficHourService:PassengerTrafficHourService,
              private busesNRoutesService:BusesNRoutesService,
              private busesService:BusesService,
              private userUtil:UserUtil) { }

  ngOnInit(): void {

    this.getAllStops();
    this.getAllRoutes();
    this.getTrafficInfo();
    this.getBusesNRoutesCom();
    this.getAllBuses();
    this.userUtil.checkUser();
  }

  goBackToMainMenu() {
    this.router.navigate(['menu']);
  }

  getRouteByNumber() {
    this.stopsService.getRouteByNumber(this.number).subscribe(
      x => {
        this.oneRoute = x;
      }
    );
    this.flag=true;
  }
  getAllStops() {
    this.stopsService.getAllStops().subscribe(
      x => {
        this.stops = x;
      }
    );
    // let number=this.stops[0].route_number;
    // console.log(number);
    // let stopsCount=0;
    // for (let i = 0; i < this.stops.length ; i++) {
    //   if(number==this.stops[i].route_number) {
    //     this.oneRoute[stopsCount]=this.stops[i];
    //   }
    //   else {
    //     this.routs.add(this.oneRoute);
    //     number=this.stops[i].route_number;
    //     stopsCount=0;
    //     i--;
    //   }
    //
    // }
  }
  getAllRoutes(){
    this.routeService.getAll().subscribe(
      x => {
        this.routes = x;
        // console.log(this.routes);
      }
    );
  }
  getTrafficInfo(){
    this.passengerTrafficHourService.getAll().subscribe(
      x => {
        this.traffic = x;
      }
    );
  }
  getAllBuses(){
    this.busesService.getAll().subscribe(
      x => {
        this.buses = x;
        // console.log(this.routes);
      }
    );
  }
  getBusesNRoutesCom(){
    this.busesNRoutesService.getAll().subscribe(
      x => {
        this.busesNRoutes = x;
      }
    );
  }




  createCom(){
    this.busesNRoutesService.createNewCom(this.newCom).subscribe(
      x=>{
        console.log(x);
      },error => {
        console.log(error);
      }
    )
  }
  deleteCom(){
    this.busesNRoutesService.deleteCom(this.newCom).subscribe(
      x=>{
        console.log(x);
      },error => {
        console.log(error);
      }
    )
  }


  juggler(){
//заполнение массива начальным значением автобусов
    for (let i = 0; i < this.routes.length; i++) {
      this.busesCount[i]=this.routes[i].min_count_of_buses;
    }
//расчет необходимого кол-ва автобусов на каждом маршруте
    //кол-во автобусов на каждый час разное, поэтому мы берем в переменную настоящее время и урезаем до часа
    this.hour=18//this.time.getHours();
    for (let i = 0; i < this.traffic.length; i++) {
      if(this.hour==this.traffic[i].hour)
      {
        for (let j = 0; j < this.routes.length; j++) {
          this.busesCount[j]=Math.round((this.traffic[i].average_value*
            this.routes[j].average_length*
            this.routes[j].average_number_of_passengers)/100);
            console.log(this.busesCount[j])
        }
      }
    }
//распределение автобусов
    //добавление
    //идем по всем необходимым значениям
    let coms = this.busesNRoutes.length+1;
    for (let i = 0; i < this.busesCount.length; i++) {
      //идем по всем автобусам
      let b=this.routes[i].busesId.length;
      for (let j = this.busesNRoutes.length+1; j < this.buses.length; j++) {
        //проверка на необходимость добавления автобусов
        console.log(b);
        console.log(coms);
        if(this.busesCount[i]>b){
          //идем по каждому маршруту автобуса
          for (let k = 0; k < this.busesNRoutes.length; k++) {
          //проверка на наличие у автобуса связки с маршрутом
            if((this.buses[j].bus_id!=this.busesNRoutes[k].bus_id && this.buses[j].routeID==undefined)
              ||(this.buses[j].bus_id!=this.busesNRoutes[k].bus_id && this.buses[j].routeID.isEmpty)){
              this.newCom.id=coms;
              this.newCom.bus_id=coms;
              this.newCom.route_id=this.routes[i].route_id;
              this.createCom();
              coms++;
              b++;
              this.ngOnInit();
              break;
            }
          }
        }
        //удаление
        else if(this.busesCount[i]<b){
          for (let k = 0; k < this.busesNRoutes.length; k++) {
            //проверка на наличие у автобуса связки с маршрутом
            if(this.buses[j].bus_id==this.busesNRoutes[k].bus_id && this.buses[j].routeID==this.busesNRoutes[k].route_id){
              this.newCom.id=this.busesNRoutes[k].id;
              this.newCom.bus_id=this.busesNRoutes[k].bus_id;
              this.newCom.route_id=this.routes[i].route_id;
              this.deleteCom();
              b--;
              this.ngOnInit();
              break;
            }
          }
        }
      }
    }
  }
}
