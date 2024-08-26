import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FormsModule, CommonModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public time:any =''

  ngOnInit(){
    this.time=new Date();
    console.log(this.time);
    
  }






  title = 'Angularclass';

  name = 'kunle';
  username:string = 'kunle';
  num = 5;
  isAdmin = true;
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
    
  }


  userss:Array <any>= [];
}
