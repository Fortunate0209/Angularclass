import { Component,inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-angularmaterial',
  standalone: true,
  imports: [MatButtonModule,MatStepperModule,MatFormFieldModule,MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './angularmaterial.component.html',
  styleUrl: './angularmaterial.component.css'
})
export class AngularmaterialComponent {
  public firstName='';
  public lastName='';
  public address='';
  public phonenumber='';
  public status='';
public array:any=[]


  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  isLinear = false;


  submit(){
    let form={
      fname:this.firstName,
      lname:this.lastName,
      address:this.address,
      pnumber:this.phonenumber,
      status:this.status
    }
    this.array.push(form)
      console.log(this.array);
  }

    
  
}
