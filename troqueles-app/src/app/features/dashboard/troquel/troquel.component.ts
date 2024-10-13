import { Component } from '@angular/core';
import { Troquel } from './model/index.model';
import { MatDialog } from '@angular/material/dialog';
import { generatedId } from '../../../shared/utils';

import { TroquelDialogComponent } from './components/troquel-dialog/troquel-dialog.component';

@Component({
  selector: 'app-troquel',
  templateUrl: './troquel.component.html',
  styleUrl: './troquel.component.scss'
})
export class TroquelComponent {

  displayedColumns: string[] = ['id', 'obleaOld', 'startDate', 'endDate','number', 'actions'];
  dataSource: Troquel[] = [
    {
      id: '1',
      dominio: 'fai281',
      numberFormOld: 123,
      numberFormNew: 321,
      obleaOld: '987',
      obleaNew: '654',
      Date: new Date(),
      reson: 'oblea unica',
    },
    {
      id: '2',
      dominio: 'djh586',
      numberFormOld: 183,
      numberFormNew: 921,
      obleaOld: '927',
      obleaNew: '654',
      Date: new Date(),
      reson: 'oblea unica',
    },
    {
      id: '3',
      dominio: 'kys934',
      numberFormOld: 323,
      numberFormNew: 385,
      obleaOld: '127',
      obleaNew: '684',
      Date: new Date(),
      reson: 'oblea unica',
    },


  ];
  nameWeek = "";

  constructor(private matdialog: MatDialog){}

  openDialog():void{
    this.matdialog.open(TroquelComponent).afterClosed()
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

      this.dataSource = this.dataSource.filter(troquel => troquel.id == id )
    }
  }

  editWeek(EditTroquel: Troquel):void{
    this.matdialog.open(TroquelDialogComponent, {data:EditTroquel}).afterClosed().subscribe(
      {
        next:(value)=>{

          if(!!value){
            this.dataSource = this.dataSource.map((el) =>
            el.id === EditTroquel.id ? {...value, id: EditTroquel.id} : el )
          }
        }
      }
    )
  }

}