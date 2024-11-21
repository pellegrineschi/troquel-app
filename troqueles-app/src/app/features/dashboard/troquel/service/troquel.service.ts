import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Troquel } from '../model/index.model';

@Injectable({
  providedIn: 'root',
})
export class TroquelService {

  private anulaciones: any[] = []; // Lista para almacenar las anulaciones
  private anulacionesSubject = new BehaviorSubject<any[]>([]); // Observable para las anulaciones

  anulaciones$ = this.anulacionesSubject.asObservable(); // Exponer como observable

  private reposicionesSubject = new BehaviorSubject<Troquel[]>([]);

  // Observable para que los componentes puedan suscribirse a los cambios
  reposiciones$ = this.reposicionesSubject.asObservable();

  // Método para actualizar las reposiciones
  setReposiciones(reposiciones: Troquel[]): void {
    this.reposicionesSubject.next(reposiciones);
  }

  // Método para agregar una reposición
  addReposicion(reposicion: Troquel): void {
    const currentReposiciones = this.reposicionesSubject.getValue();
    this.reposicionesSubject.next([...currentReposiciones, reposicion]);
  }

  // Método para eliminar una reposición
  deleteReposicionById(id: string): void {
    const currentReposiciones = this.reposicionesSubject.getValue();
    this.reposicionesSubject.next(currentReposiciones.filter(r => r.id !== id));
  }

  // Método para editar una reposición
  editReposicion(updatedReposicion: Troquel): void {
    const currentReposiciones = this.reposicionesSubject.getValue();
    this.reposicionesSubject.next(
      currentReposiciones.map(r => (r.id === updatedReposicion.id ? updatedReposicion : r))
    );
  }


  // metodo para editar una anulacion
editAnulacion(anulacion: any): void {
  const index = this.anulaciones.findIndex(a => a.id === anulacion.id);
  if (index !== -1) {
    this.anulaciones[index] = { ...this.anulaciones[index], ...anulacion };
    this.anulacionesSubject.next([...this.anulaciones]); // Notificar a los observadores
  }
}

deleteAnulacion(anulacionId: number): Observable<void> {
  // Filtramos la lista de anulaciones para excluir la que queremos eliminar.
  const index = this.anulaciones.findIndex(anulacion => anulacion.id === anulacionId);
  if (index !== -1) {
    this.anulaciones.splice(index, 1); // Elimina el elemento del array local.
  }
  console.log(`Anulación con ID ${anulacionId} eliminada.`);
  return of(); // Simula el resultado como un Observable vacío.
}



}
