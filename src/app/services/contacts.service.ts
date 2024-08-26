import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  public contactbehaviour=new BehaviorSubject<any>({
    name:'Ola',
    phonenumber:'0706653672',
    email:'ola@gmail.com',
    address:'0yo',
  })

  public getcontact(){
    return JSON.parse(localStorage.getItem('contact')!);
  }

  // public getreactive(){
  //   return JSON.parse(localStorage.getItem('currentuser')!);
  // }


}
