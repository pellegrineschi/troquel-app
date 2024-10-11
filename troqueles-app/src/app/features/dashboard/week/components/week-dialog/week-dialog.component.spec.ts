import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDialogComponent } from './week-dialog.component';

describe('WeekDialogComponent', () => {
  let component: WeekDialogComponent;
  let fixture: ComponentFixture<WeekDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeekDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
