import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourchildoneComponent } from './behaviourchildone.component';

describe('BehaviourchildoneComponent', () => {
  let component: BehaviourchildoneComponent;
  let fixture: ComponentFixture<BehaviourchildoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourchildoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourchildoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
