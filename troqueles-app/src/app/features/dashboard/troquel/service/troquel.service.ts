import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Troquel } from '../model/index.model';


@Injectable({
  providedIn: 'root',
})
export class TroquelService {
  private anulacionesSubject = new BehaviorSubject<any[]>([]);
  anulaciones$ = this.anulacionesSubject.asObservable();

  private reposicionesSubject = new BehaviorSubject<Troquel[]>([]);
  reposiciones$ = this.reposicionesSubject.asObservable();

  setReposiciones(reposiciones: Troquel[]): void {
    this.reposicionesSubject.next(reposiciones);
  }

  addReposicion(reposicion: Troquel): void {
    const currentReposiciones = this.reposicionesSubject.getValue();
    this.reposicionesSubject.next([...currentReposiciones, reposicion]);
  }

  deleteReposicionById(id: string): void {
    const currentReposiciones = this.reposicionesSubject.getValue();
    this.reposicionesSubject.next(currentReposiciones.filter(r => r.id !== id));
  }

  editReposicion(updatedReposicion: Troquel): void {
    const currentReposiciones = this.reposicionesSubject.getValue();
    this.reposicionesSubject.next(
      currentReposiciones.map(r => (r.id === updatedReposicion.id ? updatedReposicion : r))
    );
  }

  // Métodos para anulaciones
  setAnulaciones(anulaciones: any[]): void {
    this.anulacionesSubject.next(anulaciones);
  }

  addAnulacion(anulacion: any): void {
    const currentAnulaciones = this.anulacionesSubject.getValue();
    this.anulacionesSubject.next([...currentAnulaciones, anulacion]);
  }

  deleteAnulacion(anulacionId: string): Observable<void> {
    const currentAnulaciones = this.anulacionesSubject.getValue();
    this.anulacionesSubject.next(currentAnulaciones.filter(a => a.id !== anulacionId));
    console.log(`Anulación con ID ${anulacionId} eliminada.`);
    return of(); // Devuelve un Observable vacío
  }

  editAnulacion(anulacion: any): void {
    const currentAnulaciones = this.anulacionesSubject.getValue();
    this.anulacionesSubject.next(
      currentAnulaciones.map(a => (a.id === anulacion.id ? { ...a, ...anulacion } : a))
    );
  }
}

