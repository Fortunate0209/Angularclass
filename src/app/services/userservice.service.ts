import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  public userarray: (number|string)[] = [1,3,4,8,50,86, 'good morning'];

  public msg: string ='This is Angular class';

  public userarraytwo:any[] = [
    {fname:'ola',
      lname:'ope',
      age:'30',
    },

    {fname:'muiz',
      lname:'salis',
      age:'50',
    },

    {fname:'teeboy',
      lname:'taiwo',
      age:'60',
    },
  ]

  public getuserarray(){
    return this.userarray
  }

  public getuserarraytwo(){
    return this.userarraytwo
  }
}
