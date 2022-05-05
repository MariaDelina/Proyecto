import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/modelos/acerca-de-modelo';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-presentacion',
  templateUrl: './editar-presentacion.component.html',
  styleUrls: ['./editar-presentacion.component.css']
})
export class EditarPresentacionComponent implements OnInit {

  acercade: AcercaDe = null;

  constructor(
    private acercaDeService: AcercaDeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.acercaDeService.detail(id).subscribe(
      data => {
        this.acercade = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.acercaDeService.update(id, this.acercade).subscribe(
      data => {

        this.router.navigate(['/']);
      },
      err => {

        this.router.navigate(['/']);
      }
    );
  }

}
