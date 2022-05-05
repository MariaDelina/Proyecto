export class AcercaDe {
  id?: number;
  lugar_de_trabajo: string;
  titulo_de_puesto: string;
  url_logo_empresa: string;
  descripcion_de_actividades: string;


  constructor(lugar_de_trabajo: string, titulo_de_puesto: string, url_logo_empresa: string, descripcion_de_actividades:string) {
      this.lugar_de_trabajo = lugar_de_trabajo;
      this.titulo_de_puesto = titulo_de_puesto;
      this.url_logo_empresa = url_logo_empresa;
      this.descripcion_de_actividades = descripcion_de_actividades;

  }
}
