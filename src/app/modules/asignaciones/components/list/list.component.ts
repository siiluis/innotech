import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignacionesService } from '../../asignaciones.service';
import { IAsignaciones } from '../../models/asignaciones.model';

class Asignaciones {}
@Component({
  selector: 'list-asignaciones',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listAsignaciones = [];

  constructor(
    public AsignacionesService: AsignacionesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.AsignacionesService.getAsignaciones();
  }

  redirect(asignacion: IAsignaciones) {
    this.router.navigate(['/app/modules/asignaciones/add'], {
      state: { data: asignacion },
    });
  }
}
