import { Component } from '@angular/core';
import { BehaviourchildoneComponent } from "../behaviourchildone/behaviourchildone.component";
import { BehaviourchildtwoComponent } from "../behaviourchildtwo/behaviourchildtwo.component";

@Component({
  selector: 'app-behaviourparent',
  standalone: true,
  imports: [BehaviourchildoneComponent, BehaviourchildtwoComponent],
  templateUrl: './behaviourparent.component.html',
  styleUrl: './behaviourparent.component.css'
})
export class BehaviourparentComponent {

}
