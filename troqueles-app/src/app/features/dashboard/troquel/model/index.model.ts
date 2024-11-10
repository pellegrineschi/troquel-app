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

}

export interface FormularioAnulado {
  date: Date;
  numberFormOld: number;
  reson: string;
  dominio: string;
}

