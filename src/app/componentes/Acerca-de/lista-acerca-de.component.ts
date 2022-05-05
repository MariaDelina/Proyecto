import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/modelos/acerca-de-modelo';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-acerca-de',
  templateUrl: './lista-acerca-de.component.html',
  styleUrls: ['./lista-acerca-de.component.css']
})
export class ListaAcercaDeComponent implements OnInit {

  acercade: AcercaDe[] = [];

  constructor(
    private acercaDeService: AcercaDeService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.acercaDeService.lista().subscribe(
      data => {
        this.acercade = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.acercaDeService.delete(id).subscribe(
      data => {

        this.cargarProductos();
      },
      err => {

      }
    );
  }

}
