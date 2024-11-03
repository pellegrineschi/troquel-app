import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Troquel } from '../../model/index.model';

@Component({
  selector: 'app-troquel-anulacion',
  templateUrl: './troquel-anulacion.component.html',
  styleUrl: './troquel-anulacion.component.scss'
})
export class TroquelAnulacionComponent {
  @Input() anulaciones: Partial<Troquel>[] = [];
  @Output() edit = new EventEmitter<Partial<Troquel>>();
  @Output() delete = new EventEmitter<string>();

  // Método para editar una anulación
  editAnulacion(anulacion: Partial<Troquel>) {
    this.edit.emit(anulacion);
  }

  // Método para eliminar una anulación
  deleteAnulacion(id: string) {
    this.delete.emit(id);
  }
}
