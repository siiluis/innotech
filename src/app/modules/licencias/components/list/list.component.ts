import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicenciasService } from '../../licencias.service';
import { ILicencia } from '../../models/licencia.model';

class Equipo {}
@Component({
  selector: 'list-licencia',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(
    public licenciasService: LicenciasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.licenciasService.getLicencias();
  }

  redirect(licencia: ILicencia) {
    this.router.navigate(['/app/modules/licencias/add'], {
      state: { data: licencia },
    });
  }
}
