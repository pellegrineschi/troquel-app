import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekRoutingModule } from './week-routing.module';
import { WeekComponent } from './week.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WeekDialogComponent } from './components/week-dialog/week-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    WeekComponent,
    WeekDialogComponent
  ],
  exports:[WeekComponent],

  imports: [
    CommonModule,
    WeekRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule
  ]
})
export class WeekModule { }
