import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  constructor(public formBuilder: FormBuilder, public routes:Router){}
  public msg='';
  public userMsg='';
  public reactivearray:any=[];
  term=false;
  public reactform=this.formBuilder.group({
    firstname:['',[Validators.required, Validators.minLength(3)]],
    lastname:['', Validators.required],
    username:['', Validators.required],
    email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    password:['',[Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$')]],
    term:[false, Validators.requiredTrue]
  })

  ngOnInit(){
    this.reactivearray=JSON.parse(localStorage.getItem('reactiveapp')!)
    console.log(this.reactivearray);
  
    
  }
  signUp(){
   const check=  JSON.parse(localStorage.getItem('reactiveapp') || '[]')
   const email= this.reactform.value.email
   const username= this.reactform.value.username
   if(check.find((user:any)=>user.email==email)){
    this.msg='email exist'
    return;
   }

   if(check.find((user:any)=>user.username==username)){
    this.userMsg='username exist'
    return;
  }
       if(this.reactivearray==null){
this.reactivearray=[]
       }

   else{
      
          this.reactivearray.push(this.reactform.value)
          localStorage.setItem('reactiveapp', JSON.stringify(this.reactivearray))
          // console.log(localStorage['reactiveapp']);
    if(localStorage['reactiveapp']){
            this.routes.navigate(['/reactivesignin'])
          }
        }
        

//     if(this.reactivearray==null){
// this.reactivearray=[]

//     }
//     else{
      
//       this.reactivearray.push(this.reactform.value)
//       localStorage.setItem('reactiveapp', JSON.stringify(this.reactivearray))
//       console.log(localStorage['reactiveapp']);
// if(localStorage['reactiveapp']){
//         this.routes.navigate(['/reactivesignin'])
//       }
//     }
//     this.reactivearray.push(this.reactform.value)
//       localStorage.setItem('reactiveapp', JSON.stringify(this.reactivearray))
//       console.log(localStorage['reactiveapp']);
// if(localStorage['reactiveapp']){
//         this.routes.navigate(['/reactivesignin'])
//       }
      
      
    // console.log(this.reactform.value);
    // console.log(this.reactform.value['firstname']);
    // console.log(this.reactform.value['lastname']);
    // console.log(this.reactform.controls['firstname'].setValue(''));
    // console.log(this.reactform.controls['lastname'].setValue(''));
    
    
    
  }
}
