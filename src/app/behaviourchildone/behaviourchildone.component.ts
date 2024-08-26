import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-behaviourchildone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviourchildone.component.html',
  styleUrl: './behaviourchildone.component.css'
})
export class BehaviourchildoneComponent {
  constructor(public conservice:ContactsService){}
  public contactarray:any=[]

  ngOnInit(){
    console.log(this.conservice.getcontact());

    // this.contactarray=JSON.parse(localStorage.getItem('contact')!)
    this.contactarray=this.conservice.getcontact();
    console.log(this.contactarray);
    
    
  }
  updatecontact(contact:any){
    console.log(contact);
    this.conservice.contactbehaviour.next(contact);
  }
}
