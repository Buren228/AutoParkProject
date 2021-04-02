import {Roles} from "./Roles";

export class User{
  public id:number;
  public login:string;
  public password:string;
  public role:Roles;
  constructor(id,
              login,
              password,
              role)
  {this.id=id;
  this.login=login;
  this.password=password;
  this.role=role;
  }
}
