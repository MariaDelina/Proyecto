import { Component, OnInit } from '@angular/core';
import { AcercaDeService } from '../../servicios/acerca-de.service'
import { AcercaDe } from '../../modelos/acerca-de-modelo';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nuevo-acerca-de',
  templateUrl: './nuevo-acerca-de.component.html',
  styleUrls: ['./nuevo-acerca-de.component.css']
})


export class NuevoAcercadeComponent implements OnInit{
lugar_de_trabajo: string;
titulo_de_puesto: string;
url_logo_empresa: string;
descripcion_de_actividades: string;

constructor(
  private acercaDeService: AcercaDeService,
  private toastr: ToastrService,
  private router: Router
  ) { }

ngOnInit() {
}

onCreate(): void {
  const educacion = new AcercaDe (this.lugar_de_trabajo, this.titulo_de_puesto, this.url_logo_empresa, this.descripcion_de_actividades);
  this.acercaDeService.save(educacion).subscribe(
    data => {

      this.router.navigate(['/']);
    },
    err => {

      this.router.navigate(['/']);
    }
  );
}

}
