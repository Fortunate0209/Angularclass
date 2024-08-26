import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reactivedashboard',
  standalone: true,
  imports: [],
  templateUrl: './reactivedashboard.component.html',
  styleUrl: './reactivedashboard.component.css'
})
export class ReactivedashboardComponent{
userData: any={};
username:string=""
  

  constructor(public route:ActivatedRoute, public routes:Router){}

  ngOnInit(){
    this.username=this.route.snapshot.paramMap.get('username') ?? '';
    // console.log(this.username);
    
    // const user=users.find((user:any)=>user.username===this.username);
    const currentuser=JSON.parse(localStorage.getItem('currentUser')!)
    if(currentuser){
      console.log(currentuser);
      this.userData=currentuser;
      
    }
    console.log(this.userData);
    
  }

  logout(){
    // localStorage.removeItem('reactiveapp');
    localStorage.removeItem('currentUser');
    this.routes.navigate(['/reactive']);
  }
   

}
