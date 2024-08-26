import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourchildtwoComponent } from './behaviourchildtwo.component';

describe('BehaviourchildtwoComponent', () => {
  let component: BehaviourchildtwoComponent;
  let fixture: ComponentFixture<BehaviourchildtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourchildtwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourchildtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
