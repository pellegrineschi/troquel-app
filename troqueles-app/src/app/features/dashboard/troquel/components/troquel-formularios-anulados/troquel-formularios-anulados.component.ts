// import { Component, Input } from '@angular/core';
// import { Troquel } from '../../model/index.model';

// @Component({
//   selector: 'app-troquel-formularios-anulados',
//   templateUrl: './troquel-formularios-anulados.component.html',
//   styleUrl: './troquel-formularios-anulados.component.scss'
// })
// export class TroquelFormulariosAnuladosComponent {

//   @Input() formulariosAnulados: Partial<Troquel>[] = [];

// }


import { Component, OnInit } from '@angular/core';
import { Troquel } from '../../model/index.model';
import { TroquelService } from '../../service/troquel.service';

@Component({
  selector: 'app-troquel-formularios-anulados',
  templateUrl: './troquel-formularios-anulados.component.html',
  styleUrls: ['./troquel-formularios-anulados.component.scss']
})
export class TroquelFormulariosAnuladosComponent implements OnInit {
  reposiciones: Troquel[] = [];
  displayedColumns: string[] = ['date', 'numberFormOld', 'numberFormNew', 'dominio', 'reson'];

  constructor(private troquelService: TroquelService) {}

  ngOnInit(): void {
    this.troquelService.reposiciones$.subscribe(reposiciones => {
      this.reposiciones = reposiciones;
    });
  }
}
