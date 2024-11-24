

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TroquelService } from './service/troquel.service';
import { FormularioAnulado, Troquel } from './model/index.model';
import { generatedId } from '../../../shared/utils';
import { TroquelDialogComponent } from './components/troquel-dialog/troquel-dialog.component';

@Component({
  selector: 'app-troquel',
  templateUrl: './troquel.component.html',
  styleUrls: ['./troquel.component.scss']
})
export class TroquelComponent implements OnInit {

  displayedColumns: string[] = [
    'date',
    'id',
    'dominio',
    'numberFormOld',
    'numberFormNew',
    'obleaOld',
    'obleaNew',
    'reson',
    'actions'
  ];


  reposiciones: Troquel[] = [];
  anulaciones: FormularioAnulado[] = [];

  constructor(private matdialog: MatDialog, private troquelService: TroquelService) {}

  ngOnInit(): void {
    // Suscríbete a los cambios en las reposiciones desde el servicio
    this.troquelService.reposiciones$.subscribe(reposiciones => {
      this.reposiciones = reposiciones;
    });

    this.troquelService.anulaciones$.subscribe(anulaciones => {
      this.anulaciones = anulaciones;
    });
  }

  openDialog(): void {
    this.matdialog.open(TroquelDialogComponent).afterClosed().subscribe(value => {
      if (value) {
        value.id = generatedId(4);
        this.troquelService.addReposicion(value); // Agrega la reposición al servicio
      }
    });
  }

  // openDialog(): void {
  //   this.matdialog.open(TroquelDialogComponent).afterClosed().subscribe(value => {
  //     if (value) {
  //       value.id = generatedId(4);

  //       // Verifica si es una reposición o anulación
  //       if (value.type === 'reposicion') {
  //         this.troquelService.addReposicion(value);
  //       } else if (value.type === 'anulacion') {
  //         this.troquelService.addAnulacion(value);
  //       }
  //     }
  //   });
  // }


  deleteTroquelById(id: string): void {
    if (confirm('¿Está seguro de que quiere eliminar este troquel?')) {
      this.troquelService.deleteReposicionById(id); // Elimina la reposición del servicio
    }
  }

  editTroquel(troquel: Troquel): void {
    this.matdialog.open(TroquelDialogComponent, { data: troquel }).afterClosed().subscribe(value => {
      if (value) {
        const updatedTroquel = { ...troquel, ...value };
        this.troquelService.editReposicion(updatedTroquel); // Edita la reposición en el servicio
      }
    });
  }

  editAnulacion(anulacion: any): void {
    this.troquelService.editAnulacion(anulacion); // Llama al servicio
  }

  deleteAnulacion(anulacionId: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta anulación?')) {
      this.troquelService.deleteAnulacion(anulacionId).subscribe({
        next: () => {
          console.log(`Anulación con ID ${anulacionId} eliminada exitosamente.`);
        },
        error: (err) => {
          console.error('Error al eliminar la anulación:', err);
        }
      });
    }
  }


}
