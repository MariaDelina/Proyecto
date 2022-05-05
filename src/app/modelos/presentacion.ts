export class Presentacion {
  id?: number;
  fullName: string;
  titulo: string;
  linkedIn: string;
  gitHub: string;


  constructor(fullName: string, titulo: string, linkedIn: string, gitHub:string) {
      this.fullName = fullName;
      this.titulo = titulo;
      this.linkedIn= linkedIn;
      this.gitHub= gitHub;

  }
}
