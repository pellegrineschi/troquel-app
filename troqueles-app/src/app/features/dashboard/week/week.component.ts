import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WeekDialogComponent } from './components/week-dialog/week-dialog.component';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss'
})
export class WeekComponent {

  nameWeek = "";

  constructor(private matdialog: MatDialog){}

  openDialog():void{
    this.matdialog.open(WeekDialogComponent).afterClosed()
    .subscribe({
      next:(value)=>{
        console.log("valor", value);
        this.nameWeek = value.name

      }
    })
  }
}
