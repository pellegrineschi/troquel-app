import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroquelAnulacionComponent } from './troquel-anulacion.component';

describe('TroquelAnulacionComponent', () => {
  let component: TroquelAnulacionComponent;
  let fixture: ComponentFixture<TroquelAnulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TroquelAnulacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroquelAnulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
