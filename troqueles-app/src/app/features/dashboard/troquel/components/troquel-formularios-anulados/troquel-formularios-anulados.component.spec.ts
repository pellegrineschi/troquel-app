import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroquelFormulariosAnuladosComponent } from './troquel-formularios-anulados.component';

describe('TroquelFormulariosAnuladosComponent', () => {
  let component: TroquelFormulariosAnuladosComponent;
  let fixture: ComponentFixture<TroquelFormulariosAnuladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TroquelFormulariosAnuladosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroquelFormulariosAnuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
