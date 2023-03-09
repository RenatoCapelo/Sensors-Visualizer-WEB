import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaSalasComponent } from './temperatura-salas.component';

describe('TemperaturaSalasComponent', () => {
  let component: TemperaturaSalasComponent;
  let fixture: ComponentFixture<TemperaturaSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturaSalasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturaSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
