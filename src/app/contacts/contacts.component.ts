import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})

export class ContactsComponent {

public name='';
public phonenumber='';
public email='';
public address='';
public newName='';
public newPhonenumber='';
public newEmail='';
public newAddress='';
public contactarray:any=[]

ngOnInit(){
  const savedCon = localStorage.getItem('contact');
    if (savedCon) {
      this.contactarray = JSON.parse(savedCon);
    }
}
// constructor() {
//   this.loadContacts();
// }

  createcontact(){

    let contactobj={
      name:this.name,
      pnumber:this.phonenumber,
      email:this.email,
      address:this.address,
    };

   

    this.contactarray.push(contactobj)
    console.log(this.contactarray);
    localStorage.setItem('contact', JSON.stringify(this.contactarray));
    console.log(localStorage['contact']);
    
    this.name = '';
    this.phonenumber = '';
    this.email = '';
    this.address = '';


    // console.log(contactobj);

  }
  edit(i: number) {
     localStorage.setItem('newIndex', JSON.stringify(i));
  }

  delete(i: number) {
    this.contactarray.splice(i,1)
    localStorage.setItem('contact', JSON.stringify(this.contactarray));
  }


updateChanges(){
  let index= localStorage['newIndex'];
  let newContact={
    name:this.newName,
      pnumber:this.newPhonenumber,
      email:this.newEmail,
      address:this.newAddress
  }
  this.contactarray.splice(index,1,newContact);
  localStorage.setItem('contact', JSON.stringify(this.contactarray));
  console.log(localStorage['contact']);
  

  this.newName='';
  this.newPhonenumber='';
  this.newEmail='';
  this.newAddress='';
}
  
}
