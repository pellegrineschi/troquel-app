// import { Component } from '@angular/core';
// import { FormularioAnulado, Troquel } from './model/index.model';
// import { MatDialog } from '@angular/material/dialog';
// import { generatedId } from '../../../shared/utils';

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



//   displayedColumns: string[] =
//    ['id',
//     'dominio',
//     'numberFormOld',
//     'numberFormNew',
//     'obleaOld',
//     'obleaNew',
//     'date',
//     'reson',
//     'actions'];

//     displayedColumnsObleasCanceladas: string[] = ['date', 'obleaOld', 'obleaNew', 'numberFormOld', 'numberFormNew', 'dominio'];
//     displayedColumnsFormulariosAnulados: string[] = ['date', 'numberFormNew', 'reson', 'dominio'];

//     obleasCanceladas: Troquel[] = [];


//     ngOnInit() {
//       this.dividirReposiciones();
//       this.anulaciones = this.reposiciones.map(troquel=>({
//         date:troquel.date,
//         numberFormNew: troquel.numberFormNew,
//         reson: troquel.reson,
//         dominio: troquel.dominio,
//       }))

//     }





//     dividirReposiciones(): void {
//       // Aquí simplemente asignamos los datos de reposiciones a ambos arreglos.
//       this.obleasCanceladas = this.reposiciones;
//       this.formulariosAnulados = this.reposiciones;
//     }




//   constructor(private matdialog: MatDialog){}





//   openDialog(): void {
//     this.matdialog.open(TroquelDialogComponent).afterClosed()
//       .subscribe({
//         next: (value) => {
//           if (value) {
//             value["id"] = generatedId(4);

//             if (value.tipoOperacion === 'reposicion') {
//               // Agregar el troquel completo a reposiciones
//               this.reposiciones = [...this.reposiciones, value];

//               // Actualizar formulariosAnulados con nueva referencia
//               this.formulariosAnulados = this.reposiciones.map(troquel => ({
//                 id: troquel.id,
//                 date: troquel.date,
//                 numberFormOld: troquel.numberFormOld,
//                 reson: troquel.reson,
//                 dominio: troquel.dominio
//               }));
//             }
//           }
//         }
//       });
//   }







//   deleteTroquelById(id: string, tipo: 'reposicion' | 'anulacion'): void {
//     if (confirm("¿Está seguro de que quiere eliminar este troquel?")) {
//       if (tipo === 'reposicion') {
//         // Eliminar el troquel de `reposiciones`
//         this.reposiciones = this.reposiciones.filter(troquel => troquel.id !== id);

//         // Actualizar `obleasCanceladas` y `formulariosAnulados` para reflejar el cambio
//         this.obleasCanceladas = this.obleasCanceladas.filter(troquel => troquel.id !== id);
//         this.formulariosAnulados = this.formulariosAnulados.filter(troquel => troquel.id !== id);

//       } else if (tipo === 'anulacion') {
//         // Si es una anulación, solo eliminar de `anulaciones`
//         this.anulaciones = this.anulaciones.filter(troquel => troquel.id !== id);
//       }
//     }
//   }









//   editTroquel(EditTroquel: Troquel, tipo: 'reposicion' | 'anulacion'): void {
//     const troquelData = { ...EditTroquel, tipoOperacion: tipo };

//     this.matdialog.open(TroquelDialogComponent, { data: troquelData }).afterClosed().subscribe({
//       next: (value) => {
//         if (!!value) {
//           if (tipo === 'reposicion') {
//             // Actualiza la lista de `reposiciones`
//             this.reposiciones = this.reposiciones.map((el) =>
//               el.id === EditTroquel.id ? { ...value, id: EditTroquel.id, tipoOperacion: 'reposicion' } : el
//             );

//             // Sincronizar `obleasCanceladas` y `formulariosAnulados`
//             this.obleasCanceladas = this.obleasCanceladas.map((el) =>
//               el.id === EditTroquel.id ? { ...value, id: EditTroquel.id } : el
//             );

//             this.formulariosAnulados = this.formulariosAnulados.map((el) =>
//               el.id === EditTroquel.id ? { ...value, id: EditTroquel.id } : el
//             );

//           } else if (tipo === 'anulacion') {
//             // Actualiza la lista de `anulaciones`
//             this.anulaciones = this.anulaciones.map((el) =>
//               el.id === EditTroquel.id ? { ...value, id: EditTroquel.id, tipoOperacion: 'anulacion' } : el
//             );
//           }
//         }
//       },
//     });
//   }


//   deleteAnulacion(id: string) {
//     // Lógica para eliminar la anulación del array
//     this.anulaciones = this.anulaciones.filter(a => a.id !== id);
//   }

//   editAnulacion(EditAnulacion: Partial<Troquel>): void {
//     const anulacionData = { ...EditAnulacion, tipoOperacion: 'anulacion' }; // Añadir tipoOperacion como 'anulacion'

//     this.matdialog.open(TroquelDialogComponent, { data: anulacionData }).afterClosed().subscribe({
//       next: (value) => {
//         if (value) {
//           // Actualizar la lista de anulaciones
//           this.anulaciones = this.anulaciones.map((el) =>
//             el.id === EditAnulacion.id ? { ...value, id: EditAnulacion.id, tipoOperacion: 'anulacion' } : el
//           );
//         }
//       },
//     });
// }




// }


import { Component } from '@angular/core';
import { FormularioAnulado, Troquel } from './model/index.model';
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
      tipoOperacion: 'reposicion'
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
      tipoOperacion: 'anulacion'
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
      tipoOperacion: 'reposicion'
    },
  ];

  anulaciones: Partial<Troquel>[] = [];
  formulariosAnulados: FormularioAnulado[] = [];

  displayedColumns: string[] = [
    'id',
    'dominio',
    'numberFormOld',
    'numberFormNew',
    'obleaOld',
    'obleaNew',
    'date',
    'reson',
    'actions'
  ];

  displayedColumnsObleasCanceladas: string[] = ['date', 'obleaOld', 'obleaNew', 'numberFormOld', 'numberFormNew', 'dominio'];
  displayedColumnsFormulariosAnulados: string[] = ['date', 'numberFormNew', 'reson', 'dominio'];

  obleasCanceladas: Troquel[] = [];

  ngOnInit() {
    this.dividirReposiciones();
    this.anulaciones = this.reposiciones
      .filter(troquel => troquel.tipoOperacion === 'anulacion')
      .map(troquel => ({
        date: troquel.date,
        numberFormNew: troquel.numberFormNew,
        reson: troquel.reson,
        dominio: troquel.dominio,
      }));
  }

  dividirReposiciones(): void {
    // Asignar `reposiciones` a `obleasCanceladas`
    this.obleasCanceladas = this.reposiciones;

    // Filtrar `formulariosAnulados` solo con elementos de tipo `anulacion`
    this.formulariosAnulados = this.reposiciones
      .filter(troquel => troquel.tipoOperacion === 'anulacion')
      .map(troquel => ({
        id: troquel.id,
        date: troquel.date,
        numberFormNew: troquel.numberFormNew,
        reson: troquel.reson,
        dominio: troquel.dominio
      }));
  }

  constructor(private matdialog: MatDialog) {}

  // openDialog(): void {
  //   this.matdialog.open(TroquelDialogComponent).afterClosed()
  //     .subscribe({
  //       next: (value) => {
  //         if (value) {
  //           value["id"] = generatedId(4);

  //           if (value.tipoOperacion === 'reposicion') {
  //             this.reposiciones = [...this.reposiciones, value];
  //           } else if (value.tipoOperacion === 'anulacion') {
  //             // Agregar el troquel a anulaciones
  //             this.formulariosAnulados = [...this.formulariosAnulados, {
  //               id: value.id,
  //               date: value.date,
  //               numberFormNew: value.numberFormNew,
  //               reson: value.reson,
  //               dominio: value.dominio
  //             }];
  //           }
  //         }
  //       }
  //     });
  // }

  openDialog(): void {
    this.matdialog.open(TroquelDialogComponent).afterClosed()
      .subscribe({
        next: (value) => {
          if (value) {
            value["id"] = generatedId(4);

            if (value.tipoOperacion === 'reposicion') {
              // Agregar el troquel completo a reposiciones
              this.reposiciones = [...this.reposiciones, value];

              // Actualizar formulariosAnulados con nueva referencia, incluyendo numberFormOld y numberFormNew
              this.formulariosAnulados = this.reposiciones.map(troquel => ({
                id: troquel.id,
                date: troquel.date,
                numberFormOld: troquel.numberFormOld,  // Asegurarse de incluir esta propiedad
                numberFormNew: troquel.numberFormNew,
                reson: troquel.reson,
                dominio: troquel.dominio
              }));
            }
          }
        }
      });
  }


  deleteTroquelById(id: string, tipo: 'reposicion' | 'anulacion'): void {
    if (confirm("¿Está seguro de que quiere eliminar este troquel?")) {
      if (tipo === 'reposicion') {
        this.reposiciones = this.reposiciones.filter(troquel => troquel.id !== id);
        this.obleasCanceladas = this.obleasCanceladas.filter(troquel => troquel.id !== id);
      } else if (tipo === 'anulacion') {
        this.anulaciones = this.anulaciones.filter(troquel => troquel.id !== id);
        this.formulariosAnulados = this.formulariosAnulados.filter(troquel => troquel.id !== id);
      }
    }
  }

  editTroquel(EditTroquel: Troquel, tipo: 'reposicion' | 'anulacion'): void {
    const troquelData = { ...EditTroquel, tipoOperacion: tipo };

    this.matdialog.open(TroquelDialogComponent, { data: troquelData }).afterClosed().subscribe({
      next: (value) => {
        if (!!value) {
          if (tipo === 'reposicion') {
            this.reposiciones = this.reposiciones.map((el) =>
              el.id === EditTroquel.id ? { ...value, id: EditTroquel.id, tipoOperacion: 'reposicion' } : el
            );
            this.obleasCanceladas = this.obleasCanceladas.map((el) =>
              el.id === EditTroquel.id ? { ...value, id: EditTroquel.id } : el
            );
          } else if (tipo === 'anulacion') {
            this.anulaciones = this.anulaciones.map((el) =>
              el.id === EditTroquel.id ? { ...value, id: EditTroquel.id, tipoOperacion: 'anulacion' } : el
            );
            this.formulariosAnulados = this.formulariosAnulados.map((el) =>
              el.id === EditTroquel.id ? { ...value, id: EditTroquel.id } : el
            );
          }
        }
      },
    });
  }

  deleteAnulacion(id: string) {
    this.anulaciones = this.anulaciones.filter(a => a.id !== id);
  }

  editAnulacion(EditAnulacion: Partial<Troquel>): void {
    const anulacionData = { ...EditAnulacion, tipoOperacion: 'anulacion' };

    this.matdialog.open(TroquelDialogComponent, { data: anulacionData }).afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.anulaciones = this.anulaciones.map((el) =>
            el.id === EditAnulacion.id ? { ...value, id: EditAnulacion.id, tipoOperacion: 'anulacion' } : el
          );
        }
      },
    });
  }
}
