import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Troquel } from '../model/index.model';

@Injectable({
  providedIn: 'root',
})
export class TroquelService {
  private reposicionesSubject = new BehaviorSubject<Troquel[]>([]);
  reposiciones$ = this.reposicionesSubject.asObservable();

  addReposicion(reposicion: Troquel): void {
    const reposiciones = [...this.reposicionesSubject.value, reposicion];
    this.reposicionesSubject.next(reposiciones);
  }

  deleteReposicionById(id: string): void {
    const reposiciones = this.reposicionesSubject.value.filter(r => r.id !== id);
    this.reposicionesSubject.next(reposiciones);
  }

  getReposiciones(): Troquel[] {
    return this.reposicionesSubject.value;
  }
}
