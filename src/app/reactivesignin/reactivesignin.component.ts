import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-reactivesignin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactivesignin.component.html',
  styleUrl: './reactivesignin.component.css'
})
export class ReactivesigninComponent {
  constructor(public formBuilder: FormBuilder, public routes:Router){}
  public signinform=this.formBuilder.group({
    // email:[''],
    password:[''],
    username:['', Validators.required]
  });

ngOnInit(){
  const save = localStorage.getItem('reactiveapp');
  if (save) {
    const users = JSON.parse(save);
    const { username, password } = this.signinform.value;
    const user = users.find(
      (user: any) => user.password === password && user.username===username
    );
    if (user) {
      this.signinform.setValue({ password: user.password, username: user.username });
    }
  }
}
  signIn(){
    // console.log('sign in');
    if (this.signinform.valid) {
      const data = this.signinform.value;
      const storedUserData = JSON.parse(localStorage.getItem('reactiveapp') || '[]');
      const user = storedUserData.find((user: any, index:number) => user.password === data.password && user.username ===data.username);
      console.log(storedUserData);
      

      if (user) {
        // Redirect to another route if needed
        console.log('Sign in successful');
        localStorage.setItem('currentUser',JSON.stringify(user))
        // this.routes.navigate(['/dashboard']);
        this.routes.navigate([`/reactivedashboard/${user['username']}`]);
      } else {
        console.log('Invalid credentials');
        this.routes.navigate(['/reactive'])
      }
    } else {
      console.log('Form is invalid');
    }
    
  }
}
