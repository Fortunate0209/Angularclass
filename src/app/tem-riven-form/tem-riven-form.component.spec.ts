import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemRivenFormComponent } from './tem-riven-form.component';

describe('TemRivenFormComponent', () => {
  let component: TemRivenFormComponent;
  let fixture: ComponentFixture<TemRivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemRivenFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemRivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
