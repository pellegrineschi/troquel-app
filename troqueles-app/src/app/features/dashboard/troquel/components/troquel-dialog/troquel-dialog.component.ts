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
  isReposicion = true;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<TroquelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editTroquel?: Troquel
  ) {
    // Inicializar formulario
    this.troquelForm = this.fb.group({
      id: [],
      date: [null, Validators.required],
      numberFormOld: [null],
      numberFormNew: [null, Validators.required],
      qr: [null],
      obleaOld: [null],
      reson: [null, Validators.required],
      tipoOperacion: [null],
      dominio: [{ value: '', disabled: true }],
    });

    // Llenar datos si existen y configurar según tipo de operación
    if (this.editTroquel) {
      this.troquelForm.patchValue(this.editTroquel);
      this.onTipoOperacionChange(this.editTroquel.tipoOperacion || 'reposicion');
    } else {
      this.onTipoOperacionChange('reposicion');
    }
  }

  onTipoOperacionChange(value: string): void {
    this.isReposicion = value === 'reposicion';

    if (this.isReposicion) {
      this.troquelForm.get('numberFormOld')?.setValidators(Validators.required);
      this.troquelForm.get('obleaOld')?.setValidators(Validators.required);
      this.troquelForm.get('qr')?.setValidators(Validators.required);
      this.troquelForm.get('dominio')?.disable(); // Deshabilitar dominio en reposición
    } else {
      this.troquelForm.get('numberFormOld')?.clearValidators();
      this.troquelForm.get('obleaOld')?.clearValidators();
      this.troquelForm.get('qr')?.clearValidators();
      this.troquelForm.get('dominio')?.enable(); // Habilitar dominio en anulación
    }

    // Aplicar cambios de validación
    this.troquelForm.get('numberFormOld')?.updateValueAndValidity();
    this.troquelForm.get('obleaOld')?.updateValueAndValidity();
    this.troquelForm.get('qr')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.troquelForm.valid) {
      const formData = { ...this.troquelForm.value };

      // Procesar QR en caso de que esté disponible
      const qrValue = this.troquelForm.get('qr')?.value;
      if (qrValue && qrValue.includes('-')) {
        const [obleaNew, dominio] = qrValue.split('-');
        formData.dominio = dominio;
        formData.obleaNew = obleaNew;
      }

      this.matDialogRef.close(formData);
    } else {
      alert('El formulario debe ser completado');
    }
  }
}












