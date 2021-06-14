import {Injectable} from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RoleService {
    dbRoles:String[]=["admin","dispatcher"];
    routeViewRoles:String[]=["admin","dispatcher","driver","controller"];
    routeTraffic:String[]=["admin","dispatcher"];
}
