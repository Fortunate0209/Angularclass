import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-eventemitterone',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventemitterone.component.html',
  styleUrl: './eventemitterone.component.css'
})
export class EventemitteroneComponent {
    @Input() public msgfromparent=''
    public msgtoparent=''
    @Output() public eventemit=new EventEmitter 


    sendmsg(){
      this.eventemit.emit(this.msgtoparent)
      this.msgtoparent=''
    }
}
