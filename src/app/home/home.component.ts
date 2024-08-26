import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FormsModule, CommonModule, NgFor, FooterComponent, NavComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor( public route: Router) {}


  title = 'Angularclass';

  name = 'kunle';
  username:string = 'kunle';
  num = 5;
  isAdmin = false;
  users= ['tayo', 'ayo', 'taiwo', 'bibi'];
  students=[
    {id:1, name:"ayo", dept:"hardware"},
    {id:2, name:"tayo", dept:"software"},
    {id:3, name:"bolu", dept:"cybersecurity"},

  ]
  click = false;
  terms = false;
  userInput='';

  items =[
    {id:1, name: 'pen', price:100, available:true},
    {id:2, name: 't-shirt', price:200, available:false},
    {id:3, name: 'book', price:10, available:true},
    {id:4, name: 'journal', price:500, available:false},
  ]

  toggleBtn(item:any):void {
    item.available= !item.available
  }
  
  itemid(index:number, item:any):number{
    return item.id;
  }


  myFunction(){
    console.log('hello world');
    alert('hello world');
    
  }

  signUp(){
    this.route.navigate(['/products']);
    
  }


  userss:Array <any>= [];

}
