import {Buses} from "./Buses";

export class Route{
  constructor()

  constructor(
    public route_id?: number,
    public route_number?: number,
    public average_number_of_passengers?: number,
    public average_length?: number,
    public min_count_of_buses?: number,
    public busesId?:number[],
  )
  {


  }

}
