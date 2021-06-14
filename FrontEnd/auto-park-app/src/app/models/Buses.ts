export class Buses {


  constructor(public bus_id:number,
              public number:string,
              public mark:string,
              public release_date:string,
              public seats_count:number,
              public status:number,
              public routeID?,
              ) {

  }
}
