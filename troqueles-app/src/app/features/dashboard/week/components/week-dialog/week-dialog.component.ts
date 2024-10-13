import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Week } from '../../model/index.model';

@Component({
  selector: 'app-week-dialog',
  templateUrl: './week-dialog.component.html',
  styleUrl: './week-dialog.component.scss'
})
export class WeekDialogComponent {

  weekForm : FormGroup;

  constructor(private fb : FormBuilder, private matDialogRef : MatDialogRef<WeekDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editWeek? : Week
  )
   {
    this.weekForm = this.fb.group({
      name: [null, Validators.required],
      startDate: [],
      endDate: [],
      number: [null, Validators.required]
    })
    if(this.editWeek){
      this.weekForm.patchValue(this.editWeek);
    }
   }

   onSubmit(): void {

    if(this.weekForm.valid){

      this.matDialogRef.close(this.weekForm.value)
    }else{
      alert('El formulario debe ser completado')
    }

   }
}
