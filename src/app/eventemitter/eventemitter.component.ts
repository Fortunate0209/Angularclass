import { Component } from '@angular/core';
import { EventemitteroneComponent } from '../eventemitterone/eventemitterone.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventemitter',
  standalone: true,
  imports: [EventemitteroneComponent, FormsModule],
  templateUrl: './eventemitter.component.html',
  styleUrl: './eventemitter.component.css'
})
export class EventemitterComponent {
  public msg=''
  public childmsg=''
  public msgToChild=''

  receivemsg(data:any){
    this.childmsg=data
  }

  sendmsg(){
    this.msgToChild=this.msg
    this.msg=''
  }
  
}

