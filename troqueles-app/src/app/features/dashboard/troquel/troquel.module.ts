import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TroquelRoutingModule } from './troquel-routing.module';
import { TroquelComponent } from './troquel.component';
import { TroquelDialogComponent } from './components/troquel-dialog/troquel-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TroquelComponent,
    TroquelDialogComponent
  ],
  exports: [
    TroquelComponent
  ],
  imports: [
    CommonModule,
    TroquelRoutingModule,
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
export class TroquelModule { }
