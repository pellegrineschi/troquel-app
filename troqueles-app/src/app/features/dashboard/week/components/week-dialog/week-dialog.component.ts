import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-week-dialog',
  templateUrl: './week-dialog.component.html',
  styleUrl: './week-dialog.component.scss'
})
export class WeekDialogComponent {

  weekForm : FormGroup;

  constructor(private fb : FormBuilder, private matDialogRef : MatDialogRef<WeekDialogComponent>) {
    this.weekForm = this.fb.group({
      name: [null, Validators.required],
      starDate: [],
      endDate: []
    })
   }

   onSubmit(): void {
    console.log(this.weekForm.value);

    this.matDialogRef.close(this.weekForm.value)

   }
}
