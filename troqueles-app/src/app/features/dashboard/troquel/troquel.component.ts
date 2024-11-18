
// import { Component } from '@angular/core';
// import { FormularioAnulado, Troquel } from './model/index.model';
// import { MatDialog } from '@angular/material/dialog';
// import { generatedId } from '../../../shared/utils';
// import { TroquelService } from './service/troquel.service';

// import { TroquelDialogComponent } from './components/troquel-dialog/troquel-dialog.component';

// @Component({
//   selector: 'app-troquel',
//   templateUrl: './troquel.component.html',
//   styleUrl: './troquel.component.scss'
// })
// export class TroquelComponent {

//   reposiciones: Troquel[] = [
//     {
//       id: '1',
//       dominio: 'fai281',
//       numberFormOld: 123,
//       numberFormNew: 321,
//       obleaOld: '987',
//       obleaNew: '654',
//       date: new Date(),
//       reson: 'oblea unica',
//       tipoOperacion: 'reposicion'
//     },
//     {
//       id: '2',
//       dominio: 'djh586',
//       numberFormOld: 183,
//       numberFormNew: 921,
//       obleaOld: '927',
//       obleaNew: '654',
//       date: new Date(),
//       reson: 'oblea unica',
//       tipoOperacion: 'anulacion'
//     },
//     {
//       id: '3',
//       dominio: 'kys934',
//       numberFormOld: 323,
//       numberFormNew: 385,
//       obleaOld: '127',
//       obleaNew: '684',
//       date: new Date(),
//       reson: 'oblea unica',
//       tipoOperacion: 'reposicion'
//     },
//   ];

//   anulaciones: Partial<Troquel>[] = [];
//   formulariosAnulados: FormularioAnulado[] = [];

//   displayedColumns: string[] = [
//     'id',
//     'dominio',
//     'numberFormOld',
//     'numberFormNew',
//     'obleaOld',
//     'obleaNew',
//     'date',
//     'reson',
//     'actions'
//   ];

//   displayedColumnsObleasCanceladas: string[] = ['date', 'obleaOld', 'obleaNew', 'numberFormOld', 'numberFormNew', 'dominio'];
//   displayedColumnsFormulariosAnulados: string[] = ['date', 'numberFormNew', 'reson', 'dominio'];

//   obleasCanceladas: Troquel[] = [];

//   constructor(private matdialog: MatDialog, private troquelService: TroquelService) {}

//   ngOnInit() {
//     this.dividirReposiciones();
//     this.anulaciones = this.reposiciones
//       .filter(troquel => troquel.tipoOperacion === 'anulacion')
//       .map(troquel => ({
//         date: troquel.date,
//         numberFormNew: troquel.numberFormNew,
//         reson: troquel.reson,
//         dominio: troquel.dominio,
//       }));

//        // Suscribirse al estado de reposiciones
//     this.troquelService.reposiciones$.subscribe(reposiciones => {
//       this.reposiciones = reposiciones;
//     });

//   }

//   dividirReposiciones(): void {
//     // Asignar `reposiciones` a `obleasCanceladas`
//     this.obleasCanceladas = this.reposiciones;

//     // Filtrar `formulariosAnulados` solo con elementos de tipo `anulacion`
//     this.formulariosAnulados = this.reposiciones
//       .filter(troquel => troquel.tipoOperacion === 'anulacion')
//       .map(troquel => ({
//         id: troquel.id,
//         date: troquel.date,
//         numberFormNew: troquel.numberFormNew,
//         reson: troquel.reson,
//         dominio: troquel.dominio
//       }));
//   }







//   openDialog(): void {
//     this.matdialog.open(TroquelDialogComponent).afterClosed()
//       .subscribe({
//         next: (value) => {
//           if (value) {
//             value["id"] = generatedId(4);

//             if (value.tipoOperacion === 'reposicion') {
//               this.reposiciones = [...this.reposiciones, value];
//             } else if (value.tipoOperacion === 'anulacion') {
//               this.anulaciones = [...this.anulaciones, value]; // Agregar anulación
//             }
//           }
//         }
//       });
//   }



//   deleteTroquelById(id: string, tipo: 'reposicion' | 'anulacion'): void {
//     if (confirm("¿Está seguro de que quiere eliminar este troquel?")) {
//       if (tipo === 'reposicion') {
//         this.reposiciones = this.reposiciones.filter(troquel => troquel.id !== id);
//         this.obleasCanceladas = this.obleasCanceladas.filter(troquel => troquel.id !== id);
//       } else if (tipo === 'anulacion') {
//         this.anulaciones = this.anulaciones.filter(troquel => troquel.id !== id);
//         this.formulariosAnulados = this.formulariosAnulados.filter(troquel => troquel.id !== id);
//       }
//     }
//   }

//   editTroquel(EditTroquel: Troquel, tipo: 'reposicion' | 'anulacion'): void {
//     const troquelData = { ...EditTroquel, tipoOperacion: tipo };

//     this.matdialog.open(TroquelDialogComponent, { data: troquelData }).afterClosed().subscribe({
//       next: (value) => {
//         if (!!value) {
//           if (tipo === 'reposicion') {
//             this.reposiciones = this.reposiciones.map((el) =>
//               el.id === EditTroquel.id ? { ...value, id: EditTroquel.id, tipoOperacion: 'reposicion' } : el
//             );
//             this.obleasCanceladas = this.obleasCanceladas.map((el) =>
//               el.id === EditTroquel.id ? { ...value, id: EditTroquel.id } : el
//             );
//           } else if (tipo === 'anulacion') {
//             this.anulaciones = this.anulaciones.map((el) =>
//               el.id === EditTroquel.id ? { ...value, id: EditTroquel.id, tipoOperacion: 'anulacion' } : el
//             );
//             this.formulariosAnulados = this.formulariosAnulados.map((el) =>
//               el.id === EditTroquel.id ? { ...value, id: EditTroquel.id } : el
//             );
//           }
//         }
//       },
//     });
//   }

//   deleteAnulacion(id: string) {
//     this.anulaciones = this.anulaciones.filter(a => a.id !== id);
//   }

//   editAnulacion(EditAnulacion: Partial<Troquel>): void {
//     const anulacionData = { ...EditAnulacion, tipoOperacion: 'anulacion' };

//     this.matdialog.open(TroquelDialogComponent, { data: anulacionData }).afterClosed().subscribe({
//       next: (value) => {
//         if (value) {
//           this.anulaciones = this.anulaciones.map((el) =>
//             el.id === EditAnulacion.id ? { ...value, id: EditAnulacion.id, tipoOperacion: 'anulacion' } : el
//           );
//         }
//       },
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Troquel } from './model/index.model';
import { TroquelService } from './service/troquel.service';
import { TroquelDialogComponent } from './components/troquel-dialog/troquel-dialog.component';

@Component({
  selector: 'app-troquel',
  templateUrl: './troquel.component.html',
  styleUrls: ['./troquel.component.scss']
})
export class TroquelComponent implements OnInit {
  reposiciones: Troquel[] = [];

  displayedColumns: string[] = ['id', 'dominio', 'obleaOld', 'obleaNew', 'date', 'reson', 'actions'];

  constructor(private dialog: MatDialog, private troquelService: TroquelService) {}

  ngOnInit(): void {
    this.troquelService.reposiciones$.subscribe(reposiciones => {
      this.reposiciones = reposiciones;
    });
  }

  openDialog(): void {
    this.dialog.open(TroquelDialogComponent).afterClosed().subscribe(value => {
      if (value && value.tipoOperacion === 'reposicion') {
        this.troquelService.addReposicion(value);
      }
    });
  }

  deleteTroquel(id: string): void {
    if (confirm("¿Está seguro de que quiere eliminar este troquel?")) {
      this.troquelService.deleteReposicionById(id);
    }
  }
}
