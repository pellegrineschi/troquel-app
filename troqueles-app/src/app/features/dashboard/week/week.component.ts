import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WeekDialogComponent } from './components/week-dialog/week-dialog.component';
import { Week } from './model/index.model';
import { generatedId } from '../../../shared/utils';





@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss'
})



export class WeekComponent {

  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate', 'actions'];
  dataSource: Week[] = [
    {
      id: '1',
      name: 'noviembre 1',
      startDate: new Date,
      endDate: new Date
    },
    {
      id: '2',
      name: 'noviembre 2',
      startDate: new Date,
      endDate: new Date
    },
    {
      id: '3',
      name: 'noviembre 3',
      startDate: new Date,
      endDate: new Date
    }
  ];
  nameWeek = "";

  constructor(private matdialog: MatDialog){}

  openDialog():void{
    this.matdialog.open(WeekDialogComponent).afterClosed()
    .subscribe({
      next:(value)=>{
        console.log("valor", value);
        this.nameWeek = value.name

        value["id"] = generatedId(4)

        this.dataSource = [...this.dataSource, value]

      }
    })
  }

  deleteWeekById(id:string):void{
    if(confirm("esta seguro?")){

      this.dataSource = this.dataSource.filter(week => week.id!== id)
    }
  }

  editWeek(EditWeek: Week):void{
    this.matdialog.open(WeekDialogComponent, {data:EditWeek}).afterClosed().subscribe(
      {
        next:(value)=>{

          if(!!value){
            this.dataSource = this.dataSource.map((el) =>
            el.id === EditWeek.id ? {...value, id: EditWeek.id} : el )
          }
        }
      }
    )
  }
}
