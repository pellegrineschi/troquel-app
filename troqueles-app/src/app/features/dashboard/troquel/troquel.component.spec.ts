import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroquelComponent } from './troquel.component';

describe('TroquelComponent', () => {
  let component: TroquelComponent;
  let fixture: ComponentFixture<TroquelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TroquelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroquelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
