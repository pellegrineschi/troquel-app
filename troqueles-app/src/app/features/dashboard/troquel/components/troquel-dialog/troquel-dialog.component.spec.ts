import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroquelDialogComponent } from './troquel-dialog.component';

describe('TroquelDialogComponent', () => {
  let component: TroquelDialogComponent;
  let fixture: ComponentFixture<TroquelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TroquelDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroquelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
