import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Troquel } from '../../model/index.model';

@Component({
  selector: 'app-troquel-dialog',
  templateUrl: './troquel-dialog.component.html',
  styleUrl: './troquel-dialog.component.scss',
})
export class TroquelDialogComponent {
  troquelForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<TroquelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editTroquel?: Troquel
  ) {
    this.troquelForm = this.fb.group({
      id: [],
      date: [null, Validators.required],
      numberFormOld: [null, Validators.required],
      numberFormNew: [null, Validators.required],
      qr: [null, Validators.required],
      obleaOld: [null, Validators.required],
      reson: [null, Validators.required],
    });
    if (this.editTroquel) {
      this.troquelForm.patchValue(this.editTroquel);
    }
  }



  onSubmit(): void {
    if (this.troquelForm.valid) {
      const qrValue = this.troquelForm.get('qr')?.value;

      if (qrValue && qrValue.includes('-')) {
        // Validar que el QR contiene un guion y se puede dividir en dos partes
        const [dominio, obleaNew] = qrValue.split('-');

        if (dominio && obleaNew) {
          const formData = {
            ...this.troquelForm.value,
            dominio: dominio.trim(),
            obleaNew: obleaNew.trim()
          };

          this.matDialogRef.close(formData);
        } else {
          alert('El código QR es inválido: falta dominio u oblea.');
        }
      } else {
        alert('El código QR es inválido: debe tener el formato "formularioNuevo-dominio".');
      }
    } else {
      alert('El formulario debe ser completado');
    }
  }

}
