import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquiposService } from '../../equipos.service';
import { IEquipo } from '../../models/equipo.model';

class Equipo {}
@Component({
  selector: 'list-equipo',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public equiposService: EquiposService, private router: Router) {}

  ngOnInit(): void {
    this.equiposService.getEquipos();
  }

  redirect(equipo: IEquipo) {
    this.router.navigate(['/app/modules/equipos/add'], {
      state: { data: equipo },
    });
  }
}
