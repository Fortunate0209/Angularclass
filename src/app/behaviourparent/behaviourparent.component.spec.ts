import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourparentComponent } from './behaviourparent.component';

describe('BehaviourparentComponent', () => {
  let component: BehaviourparentComponent;
  let fixture: ComponentFixture<BehaviourparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
