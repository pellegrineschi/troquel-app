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

  reposiciones: Troquel[] = [
    {
      id: '1',
      dominio: 'fai281',
      numberFormOld: 123,
      numberFormNew: 321,
      obleaOld: '987',
      obleaNew: '654',
      date: new Date(),
      reson: 'oblea unica',
    },
    {
      id: '2',
      dominio: 'djh586',
      numberFormOld: 183,
      numberFormNew: 921,
      obleaOld: '927',
      obleaNew: '654',
      date: new Date(),
      reson: 'oblea unica',
    },
    {
      id: '3',
      dominio: 'kys934',
      numberFormOld: 323,
      numberFormNew: 385,
      obleaOld: '127',
      obleaNew: '684',
      date: new Date(),
      reson: 'oblea unica',
    },
  ];
  anulaciones: Partial<Troquel>[] = [];


  displayedColumns: string[] =
   ['id',
    'dominio',
    'numberFormOld',
    'numberFormNew',
    'obleaOld',
    'obleaNew',
    'date',
    'reson',
    'actions'];

    displayedColumnsObleasCanceladas: string[] = ['date', 'obleaOld', 'obleaNew', 'numberFormOld', 'numberFormNew', 'dominio'];
    displayedColumnsFormulariosAnulados: string[] = ['date', 'numberFormOld', 'reson', 'dominio'];

    obleasCanceladas: Troquel[] = [];    // Datos para la tabla "Obleas Canceladas"
    formulariosAnulados: Troquel[] = []; // Datos para la tabla "Formularios Anulados"

    // reposiciones: Troquel[] = []; // Arreglo de reposiciones original

    ngOnInit() {
      this.dividirReposiciones();
      this.anulaciones = this.reposiciones.map(troquel=>({
        date:troquel.date,
        numberFormOld: troquel.numberFormOld,
        reson: troquel.reson,
        dominio: troquel.dominio,
      }))
    }



    dividirReposiciones(): void {
      // Aquí simplemente asignamos los datos de reposiciones a ambos arreglos.
      this.obleasCanceladas = this.reposiciones;
      this.formulariosAnulados = this.reposiciones;
    }


  nameWeek = "";

  constructor(private matdialog: MatDialog){}



  openDialog(): void {
    this.matdialog.open(TroquelDialogComponent).afterClosed()
      .subscribe({
        next: (value) => {
          if (value) {
            value["id"] = generatedId(4);

            if (value.tipoOperacion === 'reposicion') {
              // Agregar el troquel completo a reposiciones
              this.reposiciones = [...this.reposiciones, value];
            } else if (value.tipoOperacion === 'anulacion') {
              // Solo los campos necesarios para anulaciones
              const anulacionData = {
                date: value.date,
                numberFormNew: value.numberFormNew,
                reson: value.reson,
                dominio: value.dominio,
                id: value.id
              };
              this.anulaciones = [...this.anulaciones, anulacionData];
            }
          }
        }
      });
  }




  deleteTroquelById(id: string, tipo: 'reposicion' | 'anulacion'): void {
    if (confirm("¿Está seguro?")) {
      if (tipo === 'reposicion') {
        this.reposiciones = this.reposiciones.filter(troquel => troquel.id !== id);
      } else if (tipo === 'anulacion') {
        this.anulaciones = this.anulaciones.filter(troquel => troquel.id !== id);
      }
    }
  }






  editTroquel(EditTroquel: Troquel, tipo: 'reposicion' | 'anulacion'): void {
    const troquelData = { ...EditTroquel, tipoOperacion: tipo };  // Agregar tipoOperacion a los datos

    this.matdialog.open(TroquelDialogComponent, { data: troquelData }).afterClosed().subscribe({
      next: (value) => {
        if (!!value) {
          if (tipo === 'reposicion') {
            // Actualiza la lista de reposiciones
            this.reposiciones = this.reposiciones.map((el) =>
              el.id === EditTroquel.id ? { ...value, id: EditTroquel.id, tipoOperacion: 'reposicion' } : el
            );
          } else if (tipo === 'anulacion') {
            // Actualiza la lista de anulaciones
            this.anulaciones = this.anulaciones.map((el) =>
              el.id === EditTroquel.id ? {
                ...value,
                id: EditTroquel.id,
                tipoOperacion: 'anulacion'
              } : el
            );
          }
        }
      },
    });
  }

  deleteAnulacion(id: string) {
    // Lógica para eliminar la anulación del array
    this.anulaciones = this.anulaciones.filter(a => a.id !== id);
  }

  editAnulacion(EditAnulacion: Partial<Troquel>): void {
    const anulacionData = { ...EditAnulacion, tipoOperacion: 'anulacion' }; // Añadir tipoOperacion como 'anulacion'

    this.matdialog.open(TroquelDialogComponent, { data: anulacionData }).afterClosed().subscribe({
      next: (value) => {
        if (value) {
          // Actualizar la lista de anulaciones
          this.anulaciones = this.anulaciones.map((el) =>
            el.id === EditAnulacion.id ? { ...value, id: EditAnulacion.id, tipoOperacion: 'anulacion' } : el
          );
        }
      },
    });
}




}
