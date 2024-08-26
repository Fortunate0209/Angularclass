import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tem-riven-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ],
  templateUrl: './tem-riven-form.component.html',
  styleUrl: './tem-riven-form.component.css'
})
export class TemRivenFormComponent {
  fname="";
  lname="";
  email="";
  password:any=[];

  terms=false;
}
