import { Component, Input } from '@angular/core';
import { Troquel } from '../../model/index.model';

@Component({
  selector: 'app-troquel-formularios-anulados',
  templateUrl: './troquel-formularios-anulados.component.html',
  styleUrl: './troquel-formularios-anulados.component.scss'
})
export class TroquelFormulariosAnuladosComponent {

  @Input() formulariosAnulados: Partial<Troquel>[] = [];

}
