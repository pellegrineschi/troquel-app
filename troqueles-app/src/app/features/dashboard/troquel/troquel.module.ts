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
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};


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
    MatTableModule,
    MatNativeDateModule,
    MatSelectModule
  ],

  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },  // Cambia el idioma a español (puedes modificarlo según sea necesario)
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS } // Utiliza el formato personalizado
  ]
})
export class TroquelModule { }
