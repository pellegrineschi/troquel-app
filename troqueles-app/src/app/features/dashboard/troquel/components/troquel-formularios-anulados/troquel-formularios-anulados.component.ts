
import { Component, Input, OnInit } from '@angular/core';
import { TroquelService } from '../../service/troquel.service';
import { FormularioAnulado, Troquel } from '../../model/index.model';



@Component({
  selector: 'app-troquel-formularios-anulados',
  templateUrl: './troquel-formularios-anulados.component.html',
  styleUrls: ['./troquel-formularios-anulados.component.scss']
})
export class TroquelFormulariosAnuladosComponent implements OnInit {
  @Input()
   formulariosAnulados: FormularioAnulado[] = [];

  reposiciones: Troquel[] = [];
  // formulariosAnulados: FormularioAnulado[] = [];

  constructor(private troquelService: TroquelService) {}

  ngOnInit(): void {
    // Suscríbete a los cambios en las reposiciones desde el servicio
    this.troquelService.reposiciones$.subscribe(reposiciones => {
      this.reposiciones = reposiciones;
    });
  }
}

