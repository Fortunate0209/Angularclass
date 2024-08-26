import { Component } from '@angular/core';
import { BehaviourchildoneComponent } from '../behaviourchildone/behaviourchildone.component';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-behaviourchildtwo',
  standalone: true,
  imports: [BehaviourchildoneComponent, BehaviourchildtwoComponent],
  templateUrl: './behaviourchildtwo.component.html',
  styleUrl: './behaviourchildtwo.component.css'
})
export class BehaviourchildtwoComponent {
  constructor(public contactservice: ContactsService){}
  public contactobj:any = {};
  ngOnInit() {
    console.log(this.contactservice.contactbehaviour);
    this.contactservice.contactbehaviour.subscribe(data=>{
      console.log(data);
      this.contactobj = data
      
    })
    
  }
}
