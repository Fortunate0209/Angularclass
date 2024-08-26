import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventemitteroneComponent } from './eventemitterone.component';

describe('EventemitteroneComponent', () => {
  let component: EventemitteroneComponent;
  let fixture: ComponentFixture<EventemitteroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventemitteroneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventemitteroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
