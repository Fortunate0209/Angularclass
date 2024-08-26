import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGroceriesComponent } from './display-groceries.component';

describe('DisplayGroceriesComponent', () => {
  let component: DisplayGroceriesComponent;
  let fixture: ComponentFixture<DisplayGroceriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayGroceriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
