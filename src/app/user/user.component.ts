import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(public userserve:UserserviceService){}
  public userarray:any=[]
  public msg:string=''
  public userarraytwo:any=[]

  ngOnInit(){
    console.log(this.userserve.getuserarray());
    this.userarray=this.userserve.getuserarray();
    console.log(this.userserve.getuserarraytwo());
    this.userarraytwo=this.userserve.getuserarraytwo();
    // console.log(this.userserve.msg);
    this.msg=this.userserve.msg
    

    

    
  }

}
