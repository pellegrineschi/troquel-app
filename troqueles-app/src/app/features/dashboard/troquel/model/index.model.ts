export interface Troquel {
  id: string;
  dominio: string;
  numberFormOld: number;
  numberFormNew: number;
  obleaOld: string;
  obleaNew: string;
  date: Date;
  reson: string;
  tipoOperacion?: string;
  qr?: string;
  // type: 'reposicion' | 'anulacion'; // Identifica el tipo

}

export interface FormularioAnulado {
  id: string;
  date: Date;
  numberFormNew: number;
  reson: string;
  dominio: string;
}

