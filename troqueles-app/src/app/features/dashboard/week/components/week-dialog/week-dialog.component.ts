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
      endDate: []
    })
    if(this.editWeek){
      this.weekForm.patchValue(this.editWeek);
    }
   }

   onSubmit(): void {
    console.log(this.weekForm.value);

    this.matDialogRef.close(this.weekForm.value)

   }
}
