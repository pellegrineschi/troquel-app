import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeekDialogComponent } from '../../../week/components/week-dialog/week-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Troquel } from '../../model/index.model';

@Component({
  selector: 'app-troquel-dialog',
  templateUrl: './troquel-dialog.component.html',
  styleUrl: './troquel-dialog.component.scss'
})
export class TroquelDialogComponent {

  troquelForm : FormGroup;

  constructor(private fb : FormBuilder, private matDialogRef : MatDialogRef<TroquelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editTroquel? : Troquel
  )
   {
    this.troquelForm = this.fb.group({
      id: [],
      dominio: [],
      date: [],
      numberFormOld: [],
      numberFormNew: [],
      obleaOld:[],
      obleaNew:[],
      rason:[]
    })
    if(this.editTroquel){
      this.troquelForm.patchValue(this.editTroquel);
    }
   }

   onSubmit(): void {

    if(this.troquelForm.valid){

      this.matDialogRef.close(this.troquelForm.value)
    }else{
      alert('El formulario debe ser completado')
    }

   }

}
