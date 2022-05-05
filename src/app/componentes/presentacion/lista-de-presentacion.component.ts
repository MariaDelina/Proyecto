import { Component, OnInit } from '@angular/core';
import { Presentacion } from '../../modelos/presentacion'
import { PresentacionService } from '../../servicios/presentacion.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-presentacion',
  templateUrl: './lista-de-presentacion.component.html',
  styleUrls: ['./lista-de-presentacion.component.css']
})
export class ListaPresentacionComponent implements OnInit {

  presentacion: Presentacion;

  constructor(
    private presentacionService: PresentacionService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarPrresentacion(this.presentacion.fullName);
  }

  cargarPrresentacion(fullName : string): void {
    this.presentacionService.detailName(fullName).subscribe(
      data => {
        this.presentacion = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.presentacionService.delete(id).subscribe(
      data => {

        this.cargarPrresentacion(this.presentacion.fullName);
      },
      err => {

      }
    );
  }

}
